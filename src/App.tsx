import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bech32 } from "bech32";
import { useEffect, useState } from "react";
import {
  formatEther,
  keccak256,
  parseEther,
  recoverPublicKey,
  ripemd160,
  serializeSignature,
  serializeTransaction,
  sha256,
  toBytes,
} from "viem";
import {
  useAccount,
  useBalance,
  useConfig,
  useConnect,
  useDisconnect,
  useSendTransaction,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from "wagmi";
import { getTransaction } from "wagmi/actions";
import {
  useReadWNatBalanceOf,
  useWriteWNatDeposit,
  useWriteWNatWithdraw,
} from "./generated";
import { cn, compressPublicKey } from "./lib/utils";

//Disclaimer" this is just demo! we are experimenting and the code is not the nicest...
function App() {
  const config = useConfig();
  const queryClient = useQueryClient();
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const { data: balance, queryKey: balanceQueryKey } = useBalance({
    address: account.address,
    query: {
      enabled: typeof account.address == "string",
    },
  });

  const { data, queryKey: wrappedQueryKey } = useReadWNatBalanceOf({
    args: [account.address as `0x${string}`],
    query: {
      enabled: typeof account.address == "string",
    },
  });

  const [wrapAmount, setWrapAmount] = useState<string>("");
  const [unwrapAmount, setUnwrapAmount] = useState<string>("");
  const [pChainAddress, setPChainAddress] = useState<string>("");
  const { data: depositHash, writeContract: writeDeposit } =
    useWriteWNatDeposit({
      mutation: {
        onSuccess() {
          setWrapAmount("");
        },
      },
    });
  const {
    isLoading: depositIsConfirming,
    isSuccess: depositIsConfirmed,
    data: depositReceiptData,
  } = useWaitForTransactionReceipt({
    hash: depositHash,
  });
  const { data: withdrawHash, writeContract: writeWithdraw } =
    useWriteWNatWithdraw({
      mutation: {
        onSuccess() {
          setUnwrapAmount("");
        },
      },
    });
  const {
    isLoading: withdrawIsConfirming,
    isSuccess: withdrawIsConfirmed,
    data: withdrawReceiptData,
  } = useWaitForTransactionReceipt({
    hash: withdrawHash,
  });

  const { data: sendData, sendTransaction } = useSendTransaction();

  const {
    isLoading: sendConfirming,
    // isSuccess: sendIsConfirmed,
    data: sendReceiptData,
  } = useWaitForTransactionReceipt({
    hash: sendData,
  });

  const { mutate: mutateTransaction } = useMutation({
    mutationFn: async (transactionHash: `0x${string}`) => {
      const transactionData = await getTransaction(config, {
        hash: transactionHash,
      });
      //here we should pay attention whit trasaction type we have
      // to serialize correctly
      const serializedTransaction = serializeTransaction({
        chainId: transactionData.chainId,
        gas: transactionData.gas,
        maxFeePerGas: transactionData.maxFeePerGas,
        maxPriorityFeePerGas: transactionData.maxPriorityFeePerGas,
        nonce: transactionData.nonce,
        to: transactionData.to,
        value: transactionData.value,
      });

      // console.log("serialized trans", serializedTransaction);

      const serialized = serializeSignature({
        r: transactionData.r,
        s: transactionData.s,
        v: transactionData.v,
        yParity: transactionData.yParity,
      });

      const publicKey = await recoverPublicKey({
        hash: keccak256(serializedTransaction),
        signature: serialized,
      });
      const compressedPubKey = compressPublicKey(publicKey.slice(2));
      const sha256Hash = sha256(Buffer.from(compressedPubKey, "hex"));
      const ripemd160Hash = ripemd160(sha256Hash);
      const words = bech32.toWords(toBytes(ripemd160Hash));
      const bech32Address = bech32.encode("costwo", words);
      return bech32Address;
    },
    onSuccess(data) {
      console.log("p address", data);
      setPChainAddress(data);
      localStorage.setItem(
        "p-address",
        JSON.stringify({ cAddress: account.address, pAddress: data })
      );
    },
  });

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: balanceQueryKey });
    queryClient.refetchQueries({ queryKey: wrappedQueryKey });
  }, [withdrawReceiptData, depositReceiptData]);

  useEffect(() => {
    if (sendReceiptData) {
      mutateTransaction(sendReceiptData.transactionHash);
    }
  }, [sendReceiptData]);

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          address: {JSON.stringify(account.address)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button
            type="button"
            onClick={() => disconnect()}
            className="bg-red-400 px-3 rounded-full"
          >
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect with wallet</h2>
        <div className="flex gap-x-6">
          {connectors.map((connector) => (
            <button
              className={cn(
                " px-3 rounded-full ",
                connector == account.connector ? "bg-green-600" : "bg-blue-600"
              )}
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
            >
              {connector.name}
            </button>
          ))}
        </div>
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      {account.status == "connected" && (
        <div>
          <h2>Switch chains</h2>
          <div className="flex gap-x-6">
            {chains.map((chain) => (
              <button
                className={cn(
                  " px-3 rounded-full ",
                  account.chainId == chain.id ? "bg-green-600" : "bg-slate-600"
                )}
                key={chain.id}
                onClick={() => switchChain({ chainId: chain.id })}
                type="button"
              >
                {chain.name}
              </button>
            ))}
          </div>
          <div>{status}</div>
          <div>{error?.message}</div>
        </div>
      )}
      <div>
        <h2>Balance:</h2>
        <div>
          {balance?.formatted} {balance?.symbol}
        </div>
      </div>
      <div>
        <h2>Wrapped Balance:</h2>
        {data !== undefined && <div>{formatEther(data)}</div>}
      </div>
      <div>
        <h2>Wrap flare:</h2>
        <div className="flex gap-x-3">
          <input
            className="bg-gray-200 text-black"
            value={wrapAmount}
            onChange={(event) => setWrapAmount(event.target.value)}
          />
          <button
            className="bg-pink-300 rounded-lg px-3 text-black"
            onClick={() => writeDeposit({ value: parseEther(wrapAmount) })}
          >
            Wrap
          </button>
        </div>
        {depositIsConfirming && <div>Waiting for confirmation...</div>}
        {depositIsConfirmed && <div>Transaction confirmed.</div>}
      </div>
      <div>
        <h2>Unwrap flare:</h2>
        <div className="flex gap-x-3">
          <input
            className="bg-gray-200 text-black"
            value={unwrapAmount}
            onChange={(event) => setUnwrapAmount(event.target.value)}
          />
          <button
            className="bg-pink-300 rounded-lg px-3 text-black"
            onClick={() =>
              writeWithdraw({
                args: [parseEther(unwrapAmount)],
              })
            }
          >
            Unwrap
          </button>
        </div>
        {withdrawIsConfirming && <div>Waiting for confirmation...</div>}
        {withdrawIsConfirmed && <div>Transaction confirmed.</div>}
      </div>
      <div>
        <h2>Public key:</h2>
        <div className="flex gap-x-3">
          <button
            className="bg-pink-300 rounded-lg px-3 text-black"
            onClick={() =>
              sendTransaction({
                to: account.address,
                value: parseEther("0"),
              })
            }
          >
            Get public key (from send transaction)
          </button>
          {sendConfirming && <div>confirming</div>}
        </div>
        <div>
          <h2>P-chain Address:</h2>
          <div className="flex gap-x-3">
            {pChainAddress && <p>{pChainAddress}</p>}
          </div>
        </div>
        {withdrawIsConfirming && <div>Waiting for confirmation...</div>}
        {withdrawIsConfirmed && <div>Transaction confirmed.</div>}
      </div>
    </>
  );
}

export default App;
