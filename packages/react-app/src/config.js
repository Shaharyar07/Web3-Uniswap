import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x63f0F1b7525544e72c8977ba26c1e40F91149aD7"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/6Y2r-oyZT2Gd3iz4mvP68-1ur4LbPAab",
  },
};