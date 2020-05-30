import dataMen from "../data/data-men.json";
import dataWomen from "../data/data-women.json";

export const fetchMenPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dataMen);
  }, 1500);
});

export const fetchWomenPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dataWomen);
  }, 1500);
});

export const fetchSingleProduct = (id) =>
  new Promise((resolve, reject) => {
    const result = getSingleData(id);
    setTimeout(() => {
      resolve(result);
    }, 500);
  });

const getSingleData = (id) => {
  let data = dataMen.results.find((el) => el.code === id);

  if (!data) {
    return (data = dataWomen.results.find((el) => el.code === id));
  }

  return data;
};
