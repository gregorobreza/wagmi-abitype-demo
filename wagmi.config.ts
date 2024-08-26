import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import WNat from "./resources/abi/WNat.json"
import { Abi } from 'viem'
import { flareTestnet } from 'wagmi/chains'


export default defineConfig({
  out: 'src/generated.ts',
  contracts: [{
    abi: WNat.abi as Abi, //is that ok
    name: "wNat",
    address: {
      [flareTestnet.id] : "0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273"}
  }],
  plugins: [react()],
})
