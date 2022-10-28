import axios from "axios";
import { Cookies } from "react-cookie";

const token = new Cookies().get("token");
const refreshToken = new Cookies().get("refreshToken");

axios.defaults.headers.common['Authorization'] = `${token}`
axios.defaults.headers.common['Refresh-Token'] = `${refreshToken}`

const instanceJSon = axios.create({
baseURL: "http://week3-board.herokuapp.com/",
headers: {
'Content-Type': 'application/json',
}
});

// const instanceForm = axios.create({
//   baseURL: "http://week3-board.herokuapp.com/",
//   headers: {
//   'Content-Type': 'multipart/form-data',
//   }
//   });
  

export default instance;