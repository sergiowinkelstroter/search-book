import "./style.css";
import { UilSearch } from "@iconscout/react-unicons";
import { Card } from "./Card";
import { useState } from "react";
import axios from "axios";

export function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  let url = `https://www.googleapis.com/books/v1/volumes?q=:${search}&key=AIzaSyCv_Ynt6tCRdHTAcn2eVPBEQSCKSiTHMe0${"&maxResults=40"}`;
  const searchBookEnter = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setBookData(res.data.items);
      });
    }
  };

  const searchBook = () => {
    if (search.value !== "") {
      axios.get(url).then((res) => {
        setBookData(res.data.items);
      });
    }
  };

  return (
    <>
      <div className="header">
        <div className="row2">
          <h2>Search Books</h2>
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite o nome do seu livro"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBookEnter}
            />
            <button onClick={searchBook}>
              <UilSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}
