import css, { SerializedStyles } from "@emotion/css/macro";

export enum SpacingRaw {
  xxl = 40,
  xl = 35,
  l = 30,
  m = 20,
  s = 15,
  xs = 10,
  xxs = 5
}

export const spacing = Object.fromEntries(
  Object.entries(SpacingRaw).map(([key, value]) => {
    return [key, `${value}px`];
  })
) as {
  [key in keyof typeof SpacingRaw]: string;
};

export const verticalFlex = Object.fromEntries(
  Object.entries(SpacingRaw).map(([key, value]) => {
    return [
      key,
      css`
        display: flex;
        flex-direction: column;
        & > *:not(:last-child) {
          margin-bottom: ${value}px;
        }
      `
    ];
  })
) as {
  [key in keyof typeof SpacingRaw]: SerializedStyles;
};

export const horizontalFlex = Object.fromEntries(
  Object.entries(SpacingRaw).map(([key, value]) => {
    return [
      key,
      css`
        display: flex;
        flex-direction: row;
        & > *:not(:last-child) {
          margin-right: ${value}px;
        }
      `
    ];
  })
) as {
  [key in keyof typeof SpacingRaw]: SerializedStyles;
};
