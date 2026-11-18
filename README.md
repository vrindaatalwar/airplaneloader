# Airplane Loader preview and package

The root app is a focused live preview. The reusable React package lives in `packages/airplane-loader`.

## Preview locally

```sh
npm install
npm run dev
```

## Install the component

The package name is configured as `@airplane-loader/react`. Publish it under this name before installing it from npm.

```sh
npm install @airplane-loader/react
pnpm add @airplane-loader/react
npx @airplane-loader/react init
```

Then use it in a React app:

```tsx
import { PlaneLoader } from "@airplane-loader/react";
import "@airplane-loader/react/styles.css";

<PlaneLoader label="Loading your next destination" />
```

The component uses the supplied sky clip and transparent aircraft artwork. Its plane is rotated nose-right and travels above the destination title from the left end to the right end of the progress track.
