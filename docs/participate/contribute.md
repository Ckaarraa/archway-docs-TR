---
sidebar_position: 3
---

# Contributing to Archway docs

- [Contributing to Archway docs](#contributing-to-starport-docs)
  - [Using this repo](#using-this-repo)
  - [Writing and contributing](#writing-and-contributing)
  - [Where can I find the tutorials and docs?](#where-can-i-find-the-tutorials-and-docs)
  - [Viewing web app builds](#viewing-web-app-builds)
    - [Preview draft PRs on a local web browser](#preview-draft-prs-on-a-local-web-browser)
    - [Preview PRs on a deployed preview](#preview-prs-on-a-deployed-preview)
  - [Who works on the docs?](#who-works-on-the-docs)

Thank you for considering making contributions. We appreciate your interest in helping us to create and maintain awesome tutorials and documentation.

## Using this repo

Review existing [Archway issues](https://github.com/archway-network/archway-docs/issues) to see if your question has already been asked and answered.

- To provide feedback, file an issue and provide generous details to help us understand how we can make it better.
- To provide a fix, make a direct contribution. If you're not a member or maintainer, fork the repo and then submit a pull request (PR) from your forked repo to the `develop` branch.
- Start by creating a draft pull request. Create your draft PR early, even if your work is just beginning or incomplete. Your draft PR indicates to the community that you're working on something and provides a space for conversations early in the development process. 
<!-- Merging is blocked for `Draft` PRs, so they provide a safe place to experiment and invite comments.  -->

## Writing and contributing

We welcome contributions to the docs, tutorials and guides. 

Our technical content follows the [Google developer documentation style guide](https://developers.google.com/style). Highlights to help you get started:

- [Highlights](https://developers.google.com/style/highlights)
- [Word list](https://developers.google.com/style/word-list)
- [Style and tone](https://developers.google.com/style/tone)
- [Writing for a global audience](https://developers.google.com/style/translation)
- [Cross-references](https://developers.google.com/style/cross-references)
- [Present tense](https://developers.google.com/style/tense)

The Google guidelines include more material than is listed here and can be used to guide your decision making about proposed content changes.

Other useful resources:

- [Google Technical Writing Courses](https://developers.google.com/tech-writing)
- [GitHub Guides Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

## Where can I find the tutorials and docs?

#### Developer docs:

_Developer docs_ refers to documentation for smart contract and dApp developers. It's content to help users build and scale dApps on Archway network and contains information that is pertinent to:
- Smart Contract development
- Web and UI frontends that connect to Archway network
- The [Archway developer CLI](https://www.npmjs.com/package/@archwayhq/cli)

Developer docs are located in folder [/docs/create](https://github.com/archway-network/archway-docs/tree/main/docs/create) of the repository.

#### Developer guides (tutorials):

_Developer guides_ are tutorials for developing Archway smart contract and dApp projects. Each guide includes step by step instructions and final source code for a completed project to be run on Archway network.

Developer guides are located in the folder [/docs/create/guides](https://github.com/archway-network/archway-docs/tree/main/docs/create/guides)

#### Node operator docs:

_Node operator docs_ refers to documentation relevant to operators of full nodes, local testnets and to connecting nodes to public networks. This content is to help with setting up, configuring, monitoring and troubleshooting node instances.

Node operator docs are located in [/docs/node](https://github.com/archway-network/archway-docs/tree/main/docs/node).

#### Validator docs:

_Validator docs_ refers to documentation relevant to operators of validator nodes, validator security and participating in validator rewards.

Validator docs are located in [/docs/validator](https://github.com/archway-network/archway-docs/tree/main/docs/validator).

## Viewing web app builds

There are two ways to see what your changes will look like in production before the updated pages are published.

- When a PR is ready for review, you can see a deployed preview on a URL that is unique for that PR.
- While a PR is in draft mode, you can preview a local build.

### Preview draft PRs on a local web browser

Since the deploy preview doesn't work on Draft PRs, follow these steps to preview a build of the Archway docs website on a local web browser.

1. If you haven't already, clone the docs repo to your local machine and change to that directory

    ```bash
    git clone git@github.com:archway-network/archway-docs.git
    cd archway-docs
    ```

2. Building the Archway docs website requires [Node and npm](https://nodejs.org/en/download/) for JavaScript. 

:::tip
For running [Docusaurus 2](https://docusaurus.io/) we recommend using Node version 14 (fermium). Docusuarus fails to compile correctly in more recent, stable versions. 

For installing and maintaining multiple versions of `node` and `npm` you can use [nvm](https://nvm.sh)
:::

3. Using [npm](https://www.npmjs.com/), install the repository's dependency modules

    ```bash
    npm install
    ```

4. Start a local instance of the Archway docs website:

```bash
npm start
```

A successful compile and bootstrap of the web application looks like: 
    
```bash
archway-docs@1.0.0-alpha start
docusaurus start --port 8080

╭────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                        │
│                     Update available 2.0.0-beta.6 → 2.0.0-beta.15                      │
│                                                                                        │
│   To upgrade Docusaurus packages with the latest version, run the following command:   │
│            npm i @docusaurus/core@latest @docusaurus/preset-classic@latest             │
│                                                                                        │
╰────────────────────────────────────────────────────────────────────────────────────────╯

Starting the development server...
Docusaurus website is running at "http://localhost:8080/".

✔ Client
  Compiled successfully in 11.38s

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/archway-docs
ℹ ｢wds｣: 404s will fallback to /index.html
```

5. You can now view the docs site in your web browser using the URL `http://localhost:8080/`. Hot-reload is enabled. That means you won't need to stop and restart the server everytime you make changes to the docs or code.

### Preview PRs on a deployed preview

After the PR moves from **Draft** to **Ready for review**, the CI status checks will automatically generate a deploy preview. As you continue to work and commit new changes to the same branch, while the PR is open, the deploy preview will be kept up to date with your latest pushed change set. 

To view a deploy preview on a **Ready for review** PR, click the preview link in the comment by the github-actions bot in the PR **Conversation** tab of the PR:

![deploy-preview](../assets/deploy-preview.png)

## Who works on the docs?

The docs and guides are maintained by [@drewstaylor](https://github.com/drewstaylor), [@santanaluiz](https://github.com/santanaluiz) and [@aelesbao](https://github.com/aelesbao) with contributions from the entire Archway team and folks like you.