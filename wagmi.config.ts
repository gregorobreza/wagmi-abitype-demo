import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import WNat from "./resources/abi/WNat.json";
import { Abi } from "viem";
import { flare, flareTestnet, songbird, songbirdTestnet } from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      abi: WNat.abi as Abi, //is that ok
      name: "wNat",
      address: {
        [flare.id]: "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",
        [songbird.id]: "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED",
        [flareTestnet.id]: "0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273",
        [songbirdTestnet.id]: "0x767b25A658E8FC8ab6eBbd52043495dB61b4ea91",
      },
    },
  ],
  plugins: [react()],
});
