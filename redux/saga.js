import { takeEvery, all, put, call } from "redux-saga/effects";
import { types } from "./types";

import {
  fetchWomenPromise,
  fetchMenPromise,
  fetchSingleProduct,
} from "../utils/mockFetchData";

//  PRODUCS SAGA
async function getData() {
  console.log("FROM GET DATA");

  try {
    const resMenShoes = await fetchMenPromise;

    const menShoes = await resMenShoes.results.map((s, i) => {
      return {
        id: s.code,
        name: s.name,
        price: s.price.value,
        image: s.images[0].url,
        brand: s.categoryName,
      };
    });

    const resWomenShoes = await fetchWomenPromise;
    const womenShoes = await resWomenShoes.results.map((s, i) => {
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

async function getSingleProdData(id) {
  const data = await fetchSingleProduct(id);
  return data;
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

function* getSingleProductAsync(action) {
  yield console.log("FROM GET SINGLE PROD BEFORE CALL DATA");
  const id = action.payload;

  const s = yield call(getSingleProdData, id);

  const shortData = {
    id: s.code,
    name: s.name,
    price: s.price.value,
    image: s.images[0].url,
    brand: s.categoryName,
    articleColorNames: s.articleColorNames,
    rgbColors: s.rgbColors,
    sellingAttributes: s.sellingAttributes ? s.sellingAttributes : null,
    variantSizes: s.variantSizes,
  };

  yield put({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: shortData });
}

function* getSingleProduct() {
  yield takeEvery(types.GET_SINGLE_PRODUCT_START, getSingleProductAsync);
}

export function* rootSaga() {
  yield all([getProducts(), getSingleProduct()]);
}
