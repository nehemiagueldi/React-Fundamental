import axios from "axios";

export let getAllBooks = async () => {
  try {
    let response = await axios.get("http://localhost:8080/api/book");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export let getDetailBooks = async (id) => {
  try {
    let response = await axios.get(`http://localhost:8080/api/book/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};