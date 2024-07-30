import { base_url } from "../../Config/Auth";
import axios from "axios";

/**
 * add a note
 */
export const addNote = (note, cb) => (dispatch) => {
  axios
    .post(`${base_url}/notes`, note)
    .then((res) => {
      console.log(res);
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      cb && cb();
    });
};

