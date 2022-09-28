import { abis } from "@my-app/contracts";
import { getPairsInfo } from "./getPairsInfo";

export const getFactoryInfo = async (web3, factoryAddress) => {
  const factory = new web3.eth.Contract(abis.factory, factoryAddress);
  const factoryInfo = {
    fee: await factory.methods.feeTo().call(),
    feeToSetter: await factory.methods.feeToSetter().call(),
    allPairsLength: await factory.methods.allPairsLength().call(),
    allPairs: [],
  };
  for (let i = 0; i < factoryInfo.allPairsLength; i++) {
    factoryInfo.allPairs.push(await factory.methods.allPairs(i).call());
  }

  factoryInfo.pairs = await getPairsInfo(web3, factoryInfo.allPairs);
  return factoryInfo;
};

