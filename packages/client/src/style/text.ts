import css, { SerializedStyles } from "@emotion/css/macro";

export enum TextSize {
  l = 30,
  m = 14,
  s = 10
}

export const TextSizeCss = Object.fromEntries(
  Object.entries(TextSize).map(([key, value]) => {
    return [
      key,
      css`
        font-size: ${value}px;
        line-height: 1.15em;
      `
    ];
  })
) as {
  [key in keyof typeof TextSize]: SerializedStyles;
};
