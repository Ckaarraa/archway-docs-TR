---
sidebar_position: 3
---

# Basics

## Developer CLI Overview

### Installation:
```
git clone git@github.com:archway-network/archway-cli.git
cd archway-cli 
npm install -g
```

### Usage: 
```
archway [command] [options]
```

### Options:
```
-v, --version       output the current version
-h, --help          display help for command
```

### Commands:
```
accounts [options]               List available wallets or add new wallet
build                            Build current project
configure [options]              Print or modify environment settings
deploy [options]                 Deploy to network, or test deployability
faucet                           Request Testnet funds from faucet
history                          Print deployments history
network                          Show network settings or migrate between networks
new                              Create a new project for Archway network
query [options] <module> [type]  Query for data on Archway network
run [options]                    Run a custom script of your own creation
test                             Run unit tests
tx [options]                     Execute a transaction on Archway network
help [command]                   display help for command
```