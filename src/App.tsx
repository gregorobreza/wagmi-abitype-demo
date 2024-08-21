import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
  useBalance,
} from "wagmi";
import { cn } from "./lib/utils";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const result = useBalance({
    address: account.address,
    chainId: account.chainId,
  });


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
              className="bg-blue-600 px-3 rounded-full "
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
        <div>{result.data?.formatted}{" "}{result.data?.symbol}</div>
      </div>
    </>
  );
}

export default App;
