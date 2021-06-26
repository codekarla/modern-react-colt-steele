export const capitalize = (str) => {
  const words = str
    .match(/[A-Z]*[a-z]+/g)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  return words.join(" ");
};
