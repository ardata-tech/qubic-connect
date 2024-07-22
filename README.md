# Qubic Wallet Snap

The Qubic Wallet Snap is a MetaMask extension that has Qubic capabilities such as public key derivation and transaction signing.

## Starting the snap

Install the latest version of the Snaps CLI

```bash
pnpm add -g @metamask/snaps-cli
```

Install the dependencies

```bash
pnpm i
```

Build and start the local development server

```bash
pnpm start
```

## Using the snap

The production snap is available as Snap ID `npm:@qubic-lib/qubic-mm-snap`.

The locally started snap is available as Snap ID `local:http://localhost:8081`.

See the [RPC API](./RPC.md) for more information on how to interact with the snap.
