import axios from "axios";
// import { AsyncStorage } from "react-native";

const api = axios.create({
  baseURL: "http://192.168.1.102:8000",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc3NTYzNDUzLCJqdGkiOiJhYzM4MzVmMTAyZGU0ZGVkODc5ODcwYTZkY2U5ODBhYyIsInVzZXJfaWQiOjF9.VNnOZ4QywwT5PYLglyvnFWVSwH8LLEl3psEPnGsHM9U"
  }
});

// api.interceptors.request.use(async config => {
//   try {
//     const token = await AsyncStorage.getItem("@MapAlert:token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   } catch (err) {
//     alert(err);
//   }
// });

export const getAlerts = async () => {
  try {
    const response = await api.get(`/api/alert/`);
    return response.data;
  } catch (err) {
    console.log("Fetch erro data---------", err);
  }
};

export const getAlert = async id => {
  try {
    const response = await api.get(`/api/alert/${id}/`);
    return response.data;
  } catch (err) {
    console.log("Fetch erro data---------", err);
  }
};
