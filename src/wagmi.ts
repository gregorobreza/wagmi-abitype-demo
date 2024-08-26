import { createConfig, http } from "wagmi";
import {
  flare,
  flareTestnet,
  mainnet,
  sepolia,
  songbird,
  songbirdTestnet,
} from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [flare, songbird, songbirdTestnet, flareTestnet],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
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
