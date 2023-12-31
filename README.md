# await-wait

Easily asynchronously wait for a specified time.

## Docs

[API Docs](https://dkershner6.github.io/use-set-as-state/)

## Installation

```
npm i await-wait
```

## Usage

```typescript
import { wait } from 'await-wait';

await wait(1000);
// One second has passed
await doAction();
```

## Contributing

All contributions are welcome, please open an issue or pull request.

To use this repository:
1. `npm i -g pnpm` (if don't have pnpm installed)
2. `pnpm i`
3. `npx projen` (this will ensure everything is setup correctly, and you can run this command at any time)
4. Good to make your changes!