import { http, createConfig } from "wagmi";
import {
  mainnet,
  sepolia,
  flare,
  songbird,
  songbirdTestnet,
  flareTestnet,
} from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia, flare, songbird, songbirdTestnet, flareTestnet],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [flare.id]: http(),
    [songbird.id]: http(),
    [songbirdTestnet.id]: http(),
    [flareTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
