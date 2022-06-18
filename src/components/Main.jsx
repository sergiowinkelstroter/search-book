import "./style.css";
import { UilSearch } from "@iconscout/react-unicons";
import { Card } from "./Card";
import { useState } from "react";
import axios from "axios";

export function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=:${search}&key=AIzaSyCv_Ynt6tCRdHTAcn2eVPBEQSCKSiTHMe0${"&maxResults=40"}`
        )
        .then((res) => {
          setBookData(res.data.items);
        });
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <UilSearch />
            </button>
          </div>
          <img
            src="https://raw.githubusercontent.com/Kirti-salunkhe/OpenBook/main/public/images/bg2.png"
            alt="criancas lendo livros"
          />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}
