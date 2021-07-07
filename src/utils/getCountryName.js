const DEFAULT_DISPLAY_LANG = "en";

export const countryNameFromCode = (code) => {
  let regionName = new Intl.DisplayNames([DEFAULT_DISPLAY_LANG], {
    type: "region",
  });
  regionName = regionName.of(code.toUpperCase());

  return regionName;
};
