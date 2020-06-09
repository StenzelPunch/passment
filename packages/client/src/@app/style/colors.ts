export const readonly = <T>(obj: T) => {
  return obj;
};
export enum color {
  // black
  tundora = "#4D4D4D",
  // blue
  azure = "#00AEFF",
  turquoise = "#0BCED1",
  bahamaBlue = "#0763A6",
  steelBlue = "#5192c1",
  halfBaked = "#83B1D3",
  //green
  mantis = "#6CCD69",
  conifer = "#ABDA48",
  //red
  vividTangerine = "#FF8080",
  sundown = "#FFB3B3"
}

export const colors = readonly({
  text: readonly({
    body: color.tundora,
    colored: readonly({
      primary: color.bahamaBlue,
      normal: color.steelBlue,
      low: color.halfBaked
    })
  }),
  error: readonly({
    primary: color.vividTangerine,
    low: color.sundown
  })
});
