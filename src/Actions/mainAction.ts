import * as actionType from "./types";
import axios from "../config/axios-orders";

export const getConfig = () => async (dispatch: any) => {
    axios.get(`call`)
        .then(response => {})
        .catch(error => console.log(error));
};
