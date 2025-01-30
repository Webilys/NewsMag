import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";

export const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) =>
        console.error("Erreur lors de la récupération des articles :", error)
      );
  }, [category]);

  return (
    <div>
      <h2 className="text-center" style={{ margin: "50px 20px 30px" }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div>
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
