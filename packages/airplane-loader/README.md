# @airplane-loader/react

The configured package name is `@airplane-loader/react`; publish it under this name before using these external install commands.

Install the airplane loading component with npm, pnpm, or the setup command:

```sh
npm install @airplane-loader/react
pnpm add @airplane-loader/react
npx @airplane-loader/react init
```

This component uses Tailwind CSS v4. If Tailwind is not already configured in your app, install it:

```sh
npm install -D tailwindcss @tailwindcss/postcss postcss
```

Configure PostCSS in `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Then add the component stylesheet and package source to your main CSS file:

```css
@import "tailwindcss";
@import "@airplane-loader/react/styles.css";
@source "../node_modules/@airplane-loader/react/dist";
```

Import and render the component:

```tsx
import { PlaneLoader } from "@airplane-loader/react";

<PlaneLoader label="Loading your next destination" />
```

Props: `label`, `src`, `poster`, `durationMs`, and `className`. The default component loops the included reference sky clip and moves the supplied top-down aircraft from the start to the end of a track above the destination title. It announces the loading label and pauses the sky video when reduced motion is preferred.
