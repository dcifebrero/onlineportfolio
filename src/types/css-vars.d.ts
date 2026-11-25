import "react";

// Allows CSS custom properties (e.g. style={{ "--d": ".1s" }}) in React style props.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
