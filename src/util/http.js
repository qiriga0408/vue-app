import axios from "axios"
import {Guid} from "./guid"
import { promised } from "q";


let DeviceID = localStorage.DeviceID;
if(!DeviceID){
DeviceID = Guid.NewGuid().ToString("D");
localStorage.DeviceID = DeviceID;
    }
let ID =DeviceID;

console.log(ID)
// axios.defaults.baseURL="https://wap.365msmk.com/";
axios.defaults.baseURL = 'http://120.53.31.103:84';

axios.interceptors.request.use(function(config){
config.headers={
DeviceID:ID,
DeviceType:"H5"
}
return config;

},function(error){
return promised.reject(error)
})
export default axios