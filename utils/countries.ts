import countries from "world-countries";

//renaming the props
export const formattedCountries = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
}));

//helper fn: find a country by its code
export const findCountryByCode = (code: string) =>
  formattedCountries.find((item) => item.code === code);
