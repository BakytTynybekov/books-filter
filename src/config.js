export const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
export const maxNum = 40;
export const startNum = 0;
const { REACT_APP_API_KEY } = process.env;

export const keyAPI = REACT_APP_API_KEY;
export const ALL_BOOKS = (name = "react") =>
  `${BASE_URL}fields=totalItems,items/id,items/volumeInfo(title,categories,authors,description,imageLinks,publishedDate)&q=${name}&startIndex=${startNum}&maxResults=${maxNum}&key=${keyAPI}`;
