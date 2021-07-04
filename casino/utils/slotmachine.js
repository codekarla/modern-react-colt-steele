export const getRandomCat = (catsArray) => {
  const length = catsArray.length;
  const index = Math.floor(Math.random() * length);
  return catsArray[index];
};
