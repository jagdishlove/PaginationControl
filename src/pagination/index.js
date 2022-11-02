import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const pagesToDisplay = 5,
  pageCount = 10;

function Pagination() {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  // const [apiDAta, setApiDAta] = useState([]);

  const buildPagination = (pageIndex) => {
    setPage(pageIndex);

    let newPages = [],
      start = 0,
      end = pagesToDisplay;

    if (pageIndex > (pagesToDisplay - 1) / 2) {
      start = pageIndex - (pagesToDisplay - 1) / 2;
      end = start + pagesToDisplay;
    }

    if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
      start = pageCount - pagesToDisplay;
      end = pageCount;
    }

    for (let i = start; i < end; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  };

  // const currentPost = apiDAta.slice(0, pagesToDisplay);

  // const getPost = async () => {
  //   const response = await axios("https://jsonplaceholder.typicode.com/posts");
  //   setApiDAta(response.data);
  // };

  // useEffect(() => {
  //   getPost();
  // }, []);

  useEffect(() => {
    buildPagination(0);
  }, []);
  return (
    <div className="pagination">
      <button
        disabled={page === 0}
        onClick={() => buildPagination(0)}
        className="material-symbol-outlined"
        type="button"
      >
        &larr;
      </button>
      {pages.map((p) => (
        <button
          className={p === page ? "active" : ""}
          onClick={() => buildPagination(p)}
          key={p}
          type="button"
        >
          {p + 1}
        </button>
      ))}

      <button
        disabled={page === pageCount - 1}
        onClick={() => buildPagination(pageCount - 1)}
        type="button"
      >
        &rarr;
      </button>
      {/* {apiDAta.length === 0 ? (
        <h1>Loading.... </h1>
      ) : (
        currentPost.map((data) => {
          return (
            <div
              style={{
                border: "1px solid skyblue",
                margin: "auto",
                width: "60%",
                textAlign: "left",
              }}
              key={data.id}
            >
              <h3 style={{ padding: ".5em" }}>
                <span style={{ fontWeight: 600 }}>{data.id}. </span>
                {data.title}
              </h3>
            </div>
          );
        })
      )} */}
    </div>
  );
}

export default Pagination;
