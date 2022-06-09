import axios from "axios";
export default axios.create({
    baseURL: "https://t2010a-spring-demo.herokuapp.com/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});