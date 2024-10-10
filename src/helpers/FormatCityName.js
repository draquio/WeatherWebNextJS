export const formatCity = (cityName) => {
  return cityName.replace(/ /g, "-");
};

export const formatCityInverse = (cityName) => {
  return cityName.replace(/-/g, ' ');
};