import React from "react";
import axios from "axios";

interface IBooks {
  title: string;
  author: string;
  quantity: number;
}

const BookList = async () => {
  try {
    const data = await axios
      .get("http://localhost:8080/library/books")
      .then((res) => res.data.books)
      .then((data: IBooks) => {
        console.log("From BookList", data);
      });
  } catch (err) {
    console.log(err);
  }
};

export default BookList;
