import axios from "axios";
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import objects from '../../../tasks.json';
import SerchBar from "../SerchBar/SerchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
//import ArticleList from "../ArticleList/ArticleList"
import { fetchArticlesWithTopic } from "../../articles-api";
//import ErrorMessage from "../ErrorMessage/ErrorMessage"
//import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
// import ImageModal from "../ImageModal/"
//import Loader from "../Loader / Loader"
// замінити objects на компонент з посиланням з бібліотеки!!!
export default function App() {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null ? JSON.parse(savClicks) : objects
  });

  useEffect(() => {
    const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
    if (isLocalStorData) {
      const data = localStorage.getItem("my-clicks");
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("my-clicks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        // 2. Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);
  const handleSearch = topic => {
    console.log(topic);

    // const visibleTasks = tasks.filter((task) =>
    //   task.name.toLowerCase().includes(filter.toLowerCase()));
  };


  return (
    <div className={css.container}>
      <div>
        <h4>Latest articles</h4>
        <SerchBar onSearch={handleSearch} />
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {articles.length > 0 && <ImageGallery items={articles} objects={objects} />}
      </div>
      <>

        {/* <Loader /> */}
        {/* <LoadMoreBtn /> */}
        {/* <ImageModal /> */}
        {/* <ErrorMessage /> */}

        {/* <ErrorMessage onAdd={addTask} /> */}
        {/* <SerchBar value={filter} onFilter={setFilter} /> */}

      </>
    </div>
  )
}


// const addTask = (newTask) => {
//   setTasks((prevTasks) => {
//     return [...prevTasks, newTask];
//   });
// };
// const deleteTask = (taskId) => {
//   setTasks((prevTasks) => {
//     return prevTasks.filter((task) => task.id !== taskId);
//   });
// };
// const visibleTasks = tasks.filter((task) =>
//   task.name.toLowerCase().includes(filter.toLowerCase()));
//  <ImageGallery tasks={visibleTasks} objects={objects} onDelete={deleteTask} />


