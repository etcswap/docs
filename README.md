# ETCswap Documentation

This web application contains all documentation for ETCswap products, including ETCswapV2 and ETCswapV3 protocols. It is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

ETCswap is derivative software of the most popular EVM application,Uniswap. It adds support for the Ethereum Classic network following development best practices. ETCswap is a foundational DeFi primitive the network's application layer can rely on as it continues its organic growth.

* The protocol is compliant with global financial regulations.
* The protocol is non-custodial, which means end users have control of their funds at all times without the need for intermediaries.
* The frontend user interface is hosted on the decentralized web via IPFS, which means end users will always be able to locally host the frontend and interact with the smart contracts.
* The smart contracts are not updatable, meaning they are immutable and resistant to censorship.
* The ETCswap protocols are deploy on the most censorship resistant smart contract blockchain, which means users will have access to this protocol as long as the network is alive and relevant.
* Users are free to make their own liquidity pools and deploy their own versions of the open source front end.
* There is no ability to restrict access to the smart contracts and open source front end.

Ethereum Classic is a decentralised continuation of the original Ethereum Virtual Machine launched in July, 2015. To date, Ethereum Classic is the largest Proof of Work blockchain network with Smart Contract functionality.

To understand the rationale of this project and the importance of protocol deployment to the Ethereum Classic network for the macro-EVM ecosystem and the blockchain industry as a whole, please give these documents a read:

## Literature
* [Why Classic?](https://ethereumclassic.org/why-classic)
* [The Ethereum Classic Declaration of Independence](https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence)
* [The Ethereum Classic Foundation](https://ethereumclassic.org/knowledge/foundation)

# Project Layout

### ETCswap documentation is broken down into four sections:
- Concepts - General ETCswap information or concepts useful for using ETCswap products, such as *Liquidity* and *Fees*
- Contracts - ETCswap smart contracts such as the V3 Contracts or *Permit2*
- SDKs - ETCswap integrations such as the *v3-sdk* and the *Swap Widget*
- APIs - The ETCswap APIs such the *Subgraph API*

### Each item in a section should include the following:
- *Overview*
- *Guides*
- *Technical Reference*

## Adding Documentation

> **After deploying your change, please make sure you [update the search indices](#how-to-update-search-indices-with-algolia) if a new file was added as part of the change**
### Overview
A product overview should address points such as:

- What are the high level components of the product?
- What what is the high level functionality the product offers?
- Where does the source code of the product live?
- Where does the code artifact live (eg *npm*) and how does someone integrate with it?

A good example is the [V3 Smart Contracts](./docs/contracts/v3/overview.md).

### Guides
> Guides should follow the **Principles of a Good Guide**:
- A guide corresponds to a reusable piece of code that demonstrates a single concept in the ETCswap ecosystem.
- Guides have three parts:
    1. An **introduction** that explains the concept that the piece of code implements and a summary of what the guide will cover and result in.
    2. A step-by-step **walkthrough** of each line of the example code 
    3. An **output** or end state that users can test against what they’re seeing to know if they implemented correctly
- Guides do not show source code snippets that should not be included in the example (IE using snippets from a source contract to explain how to integrate with it). If a guide needs to reference an external piece of code it should link to the source code or technical reference.
- We keep Links and References ***only at the bottom*** of pages and reference them using footnotes to **keep distractions at a minimum**
- Our goal is to have the developer build something within **10 minutes per guide** but also provide the option for a deep dive by providing references to extra content.
- Guides should end with a **transition** to the next one, recommendations and real world projects examples
- Each guides should refer to a code example in our example-repo
- Guides should be standalone pieces
- Use the least dependencies as possible
- Input changes (eg address, tokens, amounts) should be in the code

By implementing these consistent principles ETCswap will have docs that are easy to understand and produce reusable code for its community.


A good example is the [V3 SDK Guides](./docs/sdk/v3/guides/01-quick-start.md).

### Technical References
This should contain the technical reference for the exported interfaces. A good example is the [V3 SDK](./docs/sdk/v3/reference/overview).
These files can be created using the [guides below](#how-to-create-a-technical-reference).

# Contributing to ETCswap Docs

## Guidelines
Contributing to the docs site is a great way to get involved in the dev community and help other developers along the way! Check out our guidelines [here](./CONTRIBUTING.md).

## Checklist for adding a new product

- Did I pick the right section for the product? 
- Did I create the product folder?
- Did I introduce any new concepts? If so add under */concepts/<category_name><product_name>*
- Did I include an Overview of the product under *<category_name>/<product_name>/overview* ?
- Did I include Guides of the product under *<category_name>/<product_name>/guides* ?
- Did I include Technical Reference of the product under *<category_name>/<product_name>/reference* ?
- Did I give a descriptive name/id to each document? This is important because that shows up in the URL
- Did I open a PR using the the [contributing](./CONTRIBUTING.md) guidelines?
- Did I [update the search indices](#how-to-update-search-indices-with-algolia) after my change was deployed?

## Checklist example

Let's walk through an example by considering the *Permit2* smart contract:
-  Did I pick the right section for the product? 
    - In this case, [contracts](./docs/contracts/) 
- Did I create the product folder? 
    - In this case, [yes](./docs/contracts/permit2/)
- Did I introduce any new concepts? 
    - No
- Did I include an Overview of the product under */contracts/permit2/overview* ?
    - Yes, I did add them [here](./docs/contracts/permit2/overview.md)
- Did I include Guides of the product under *contracts/permit2/guides* ?
    - No, they should be added [here](./docs/contracts/permit2/guides)
- Did I include Technical Reference of the product under *contracts/permit2/reference* ?
    - Yes I added them [here](./docs/contracts/permit2/reference)
- Did I open a PR using the the [Contributing](./CONTRIBUTING.md) guidelines?
    - Yes
- Did I update the search indices after my change was deployed?
    - Yes I did using the [guides below](#how-to-update-search-indices-with-algolia)

# How to create a Technical Reference
## How to generate markdown files from solidity Natspec comments

Install solidity doc gen
`npm install solidity-docgen`

Get the correct compiler version
`npm install -D solc-0.7@npm:solc@0.7.6`

Put the updated template `contract.hbs` in a /templates folder under the same directory as /contracts that you want to generate

Run `npx solidity-docgen --solc-module solc-0.7 -t ./templates`

# How to generate markdown files from typescript comments

`npm install --save-dev typedoc typedoc-plugin-markdown`

Depending on how your project was created, you might have to install Typescript:
`npm install --save-dev typescript`

`npx typedoc --out <docs> src/index.ts`

You might have to use the `--skipErrorChecking` flag to the `typedoc` command for cases where types are fetched during transpile time, such as contract ABIs.

See https://www.npmjs.com/package/typedoc-plugin-markdown for details.

# How to Update search indices with algolia

- Create an .env file with `APPLICATION_ID` and the `API_KEY` (write access). 
If you don't have those, one for the Engineering Managers should be able to help you.
- Edit config.json file if needed:
    - Start url from updated website
    - Sitemap url from updated website: eg for docs: https://docs.etcswap.org/sitemap.xml
    - Use "v3-docs" as the index name
- [Install](https://www.docker.com/products/docker-desktop/) and start running Docker Desktop
- Install jq `brew install jq`
- Run `docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper`

## Installation

```console
yarn install
```

## Local Development

```console
yarn run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Clear cache

```console
yarn docusaurus clear
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment
The application automatically deployed to production using [Vercel](https://vercel.com/etcswap/docs) upon merge into **main**.
