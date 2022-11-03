import axios from "axios";
import { Cookies } from "react-cookie";

//요청에 credential 정보 담아서 보낼지
//쿠키를 첨부해 보내거나 헤더에 authorization 요청 있을 때
axios.defaults.withCredentials = true;

const access_token = new Cookies().get("token");
const refresh_token = new Cookies().get("refreshToken");

axios.defaults.headers.common['Authorization'] = `${access_token}`
axios.defaults.headers.common['Refresh-Token'] = `${refresh_token}`

const instanceJSon = axios.create({
baseURL: "http://13.209.98.109:8080",
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
  

export default instanceJSon;