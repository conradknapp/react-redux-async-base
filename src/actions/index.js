import axios from "axios";

import * as actionTypes from "./types";

const BASE_URL = "https://api.github.com/users";

export const onFetchUser = searchTerm => {
  const url = `${BASE_URL}/${searchTerm}`;
  const userRequest = axios.get(url);

  console.log(userRequest);

  return {
    type: actionTypes.FETCH_USER,
    payload: userRequest
  };
};
