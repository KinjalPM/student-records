 import axios from 'axios';

// export default axios.create({
//     baseURL:'https://reaction-kinjal-mehta.herokuapp.com/'
// })

// export default axiosInstance;

// import axios from ‘axios’;

let baseURL=process.env.REACT_APP_BACKEND_URL
export default axios.create({
    baseURL
  });