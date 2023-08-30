import NFTDescriptor from 'v3-periphery-1_3_0/artifacts-zk/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json'
import createDeployLibraryStep from './meta/createDeployLibraryStep'
import { ZkSyncArtifact } from '@matterlabs/hardhat-zksync-deploy/src/types'

export const DEPLOY_NFT_DESCRIPTOR_LIBRARY_V1_3_0 = createDeployLibraryStep({
  key: 'nftDescriptorLibraryAddressV1_3_0',
  artifact: NFTDescriptor as ZkSyncArtifact,
})
