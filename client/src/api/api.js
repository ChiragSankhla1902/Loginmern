import axios from "axios";


const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn=(formdata)=>API.post("/user/signin",formdata);
export  const signUp=(formdata)=>API.post("/user/signup",formdata);
