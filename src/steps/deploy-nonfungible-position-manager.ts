import NonfungiblePositionManager from '@uniswap/v3-periphery/artifacts-zk/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'
import createDeployContractStep from './meta/createDeployContractStep'
import { ZkSyncArtifact } from '@matterlabs/hardhat-zksync-deploy/src/types'

export const DEPLOY_NONFUNGIBLE_POSITION_MANAGER = createDeployContractStep({
  key: 'nonfungibleTokenPositionManagerAddress',
  async computeArtifact() {
    return {
      artifact: NonfungiblePositionManager as ZkSyncArtifact,
    }
  },
  computeArguments(state, config) {
    if (state.v3CoreFactoryAddress === undefined) {
      throw new Error('Missing V3 Core Factory')
    }
    if (state.descriptorProxyAddress === undefined) {
      throw new Error('Missing NonfungibleTokenDescriptorProxyAddress')
    }

    return [state.v3CoreFactoryAddress, config.weth9Address, state.descriptorProxyAddress]
  },
})
