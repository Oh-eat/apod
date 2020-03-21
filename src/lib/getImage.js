import dateToString from "./dateToString";
import Axios from "axios";

export default async date => {
  const apiKey = "duzf7OfNKOPrEIBfP7uf6fyKUW25LNMgJygX5Ojk";
  const dateString = dateToString(date);
  const result = { response: null, error: null };
  try {
    const response = await Axios.get(
      `https://api.nasa.gov/planetary/apod?date=${dateString}&api_key=${apiKey}`
    );
    result.response = response;
  } catch (error) {
    result.error = error;
  }
  return result;
};
