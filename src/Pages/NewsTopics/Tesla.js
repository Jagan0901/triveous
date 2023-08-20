import { useState, useEffect } from "react";
import { Loading } from "../../Components/Loading";
import axios from "axios";
import { API_KEY } from "../../config/api-key";
import { Articles } from "../../Components/NewsList/Articles";
import { NavBar } from "../../NavBar";

export function Tesla() {
  const [articlesList, setArticlesList] = useState(null);
  const [error, setError] = useState("");

  const getArticles = () => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-07-20&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        setArticlesList(data.data.articles);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  };

  useEffect(() => getArticles(), []);

  return (
    <>
      <NavBar />
      {articlesList ? (
        <div className="App-container">
          {articlesList.map((article) => (
            <Articles articles={article} key={article.title} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
