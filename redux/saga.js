import { takeEvery, all, put, call } from "redux-saga/effects";
import dataMen from "../data/data-men.json";
import dataWomen from "../data/data-women.json";
import { types } from "./types";

async function getData() {
  console.log("FROM GET DATA");
  try {
    /******** REQUEST TO THE REAL API ********/
    // const resMenShoes = await axios({
    //   method: "GET",
    //   url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "e3de8ed666mshce5c85c7dfd84e8p13756djsn0d162ac5ee88",
    //     useQueryString: true,
    //   },
    //   params: {
    //     categories: "men_shoes",
    //     sortBy: "stock",
    //     country: "us",
    //     lang: "en",
    //     currentpage: "0",
    //     pagesize: "30",
    //   },
    // });
    // const resWomenShoes = await axios({
    //   method: "GET",
    //   url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "e3de8ed666mshce5c85c7dfd84e8p13756djsn0d162ac5ee88",
    //     useQueryString: true,
    //   },
    //   params: {
    //     categories: "ladies_shoes",
    //     sortBy: "stock",
    //     country: "us",
    //     lang: "en",
    //     currentpage: "0",
    //     pagesize: "30",
    //   },
    // });

    const resMenShoes = dataMen.results;

    const menShoes = await resMenShoes.map((s, i) => {
      return {
        id: s.code,
        name: s.name,
        price: s.price.value,
        image: s.images[0].url,
        brand: s.categoryName,
      };
    });

    console.log(menShoes);
    const resWomenShoes = dataWomen.results;
    const womenShoes = await resWomenShoes.map((s, i) => {
      return {
        id: s.code,
        name: s.name,
        price: s.price.value,
        image: s.images[0].url,
        brand: s.categoryName,
      };
    });

    return {
      men: {
        shoes: menShoes,
      },
      women: {
        shoes: womenShoes,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

function* getProductsAsync() {
  const res = yield call(getData);

  yield console.log("GET DATA FROM API SUCCESS");
  // SEND THE DATA TO THE STORE
  yield put({ type: types.GET_PRODUCT_SUCCESS, payload: res });
}

function* getProducts() {
  yield takeEvery(types.GET_PRODUCT_START, getProductsAsync);
}

export function* rootSaga() {
  yield all([getProducts()]);
}
