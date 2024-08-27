import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useSwitchChain,
  useWaitForTransactionReceipt
} from "wagmi";
import {
  useReadWNatBalanceOf,
  useWriteWNatDeposit,
  useWriteWNatWithdraw,
} from "./generated";
import { cn } from "./lib/utils";

function App() {
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

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: balanceQueryKey });
    queryClient.refetchQueries({ queryKey: wrappedQueryKey });
  }, [withdrawReceiptData, depositReceiptData]);

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
    </>
  );
}

export default App;
