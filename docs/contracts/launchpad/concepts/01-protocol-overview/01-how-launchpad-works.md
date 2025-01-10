---
id: how-launchpad-works
title: How Launchpad works
---

ETCswap Launchpad allows projects to efficiently raise funds and swiftly distribute tokens on decentralized exchanges (DEX). Below are the key features and how operates.


Tokens are created with virtual liquidity (bonding curve), and it is the investors who contribute to the liquidity pool (LP) through their buys and sells.

1. Initial Market Cap
    1. The Initial Market Cap is determined by the target raising amount set by the Minter (the project creator).
    2. The Minter can set the target raising amount between 100 ETC to 1,000 ETC, which serves as a crucial indicator for the project's capital raising and initial valuation.
    3. The Market Cap is further influenced by the Bonding Curve, which dictates how token prices will change during the Initial Liquidity Offer (ILO) process and impacts the overall market valuation of the project.

2. Automatic DEX Distribution Upon Reaching the Bonding Curve Goal
    1. Once the Minter's target raising amount is achieved, the tokens are immediately deployed to ETCswap V3. This ensures investors have instant access to liquidity, allowing the project to quickly enter the market.

3. LP Token Burn and DEX Lock
    1. After the tokens are deployed on the DEX, the generated Liquidity Pool (LP) tokens are burned by sending the LP tokens to an known address that does not have `SEND` functionality.
    2. Once burned, these LP tokens are permanently locked in the DEX, ensuring the project's liquidity remains secured and permanently tied to the ETCswap V3 DEX. This reinforces trust and stability in the liquidity pool. This burning mechanism increases the total TVL in ETCswap V3 which benefits all V3 pools due to the Smart Router logic's ability to route trades through multiple markets to minimize slippage for users.

# Further reading

To see how token swaps work in practice, and to walk through the lifecycle of a swap, check out [Swaps](../core-concepts/swaps). Or, to see how liquidity pools work, see [Pools](../core-concepts/pools).

Ultimately, of course, the ETCswap protocol is just smart contract code running on Ethereum Classic. To understand how they work, head over to [Smart Contracts](../../reference/smart-contracts/factory).
