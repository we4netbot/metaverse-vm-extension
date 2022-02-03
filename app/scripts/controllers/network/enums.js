export const ROPSTEN = 'ropsten'
export const RINKEBY = 'rinkeby'
export const KOVAN = 'kovan'
export const MAINNET = 'mainnet'
export const GOERLI = 'goerli'
export const LOCALHOST = 'localhost'
export const NEWFRONTIER = 'newfrontier'
export const ETHEREUM = 'ethereum'
export const POLYGON = 'polygon'

export const MAINNET_NETWORK_ID = '23'
export const ROPSTEN_NETWORK_ID = '3'
export const RINKEBY_NETWORK_ID = '4'
export const GOERLI_NETWORK_ID = '5'
export const KOVAN_NETWORK_ID = '42'
export const NEWFRONTIER_NETWORK_ID = '43'
export const ETHEREUM_NETWORK_ID = '1'
export const POLYGON_NETWORK_ID = '137'

export const MAINNET_CHAIN_ID = '0x17'
export const ROPSTEN_CHAIN_ID = '0x3'
export const RINKEBY_CHAIN_ID = '0x4'
export const GOERLI_CHAIN_ID = '0x5'
export const KOVAN_CHAIN_ID = '0x2a'
export const NEWFRONTIER_CHAIN_ID = '0x2b'
export const ETHEREUM_CHAIN_ID = '0x1'
export const POLYGON_CHAIN_ID = '0x89'

export const ROPSTEN_DISPLAY_NAME = 'Ropsten'
export const RINKEBY_DISPLAY_NAME = 'Rinkeby'
export const KOVAN_DISPLAY_NAME = 'Kovan'
export const MAINNET_DISPLAY_NAME = 'Metaverse Network'
export const GOERLI_DISPLAY_NAME = 'Goerli'
export const NEWFRONTIER_DISPLAY_NAME = 'New Frontier Testnet'
export const ETHEREUM_DISPLAY_NAME = 'Ethereum Mainnet'
export const POLYGON_DISPLAY_NAME = 'Polygon'

export const INFURA_PROVIDER_TYPES = [
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  GOERLI,
  NEWFRONTIER,
  ETHEREUM,
  POLYGON,
]

export const NETWORK_TYPE_TO_ID_MAP = {
  [ROPSTEN]: { networkId: ROPSTEN_NETWORK_ID, chainId: ROPSTEN_CHAIN_ID },
  [RINKEBY]: { networkId: RINKEBY_NETWORK_ID, chainId: RINKEBY_CHAIN_ID },
  [KOVAN]: { networkId: KOVAN_NETWORK_ID, chainId: KOVAN_CHAIN_ID },
  [GOERLI]: { networkId: GOERLI_NETWORK_ID, chainId: GOERLI_CHAIN_ID },
  [MAINNET]: { networkId: MAINNET_NETWORK_ID, chainId: MAINNET_CHAIN_ID },
  [NEWFRONTIER]: { networkId: NEWFRONTIER_NETWORK_ID, chainId: NEWFRONTIER_CHAIN_ID },
  [ETHEREUM]: { networkId: ETHEREUM_NETWORK_ID, chainId: ETHEREUM_CHAIN_ID },
  [POLYGON]: { networkId: POLYGON_NETWORK_ID, chainId: POLYGON_CHAIN_ID },
}

export const NETWORK_TO_NAME_MAP = {
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [GOERLI]: GOERLI_DISPLAY_NAME,
  [NEWFRONTIER]: NEWFRONTIER_DISPLAY_NAME,
  [ETHEREUM]: ETHEREUM_DISPLAY_NAME,
  [POLYGON]: POLYGON_DISPLAY_NAME,

  [ROPSTEN_NETWORK_ID]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY_NETWORK_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_NETWORK_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_NETWORK_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_NETWORK_ID]: MAINNET_DISPLAY_NAME,
  [NEWFRONTIER_NETWORK_ID]: NEWFRONTIER_DISPLAY_NAME,
  [ETHEREUM_NETWORK_ID]: ETHEREUM_DISPLAY_NAME,
  [POLYGON_NETWORK_ID]: POLYGON_DISPLAY_NAME,

  [ROPSTEN_CHAIN_ID]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY_CHAIN_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CHAIN_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_CHAIN_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_CHAIN_ID]: MAINNET_DISPLAY_NAME,
  [NEWFRONTIER_CHAIN_ID]: NEWFRONTIER_DISPLAY_NAME,
  [ETHEREUM_CHAIN_ID]: ETHEREUM_DISPLAY_NAME,
  [POLYGON_CHAIN_ID]: POLYGON_DISPLAY_NAME,
}
