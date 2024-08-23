
// import ReactDOM from 'react-dom';
// import Modal from 'react-dom';
import axios from "axios";
import css from './App.module.css'
import React, { useState, useEffect } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// const notify = () => toast('enter a name.');
// const notifyli = () => toast('Whoops, something went wrong! Please try reloading this page!');
// const notifyci = () => toast('Were sorry, but you ve reached the end of search results.');
import SerchBar from "../SerchBar/SerchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import { getAsyncImage, params } from "../../articles-api"
// import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
// import ImageModal from "../ImageModal/"
import RotatingLoader from "../Loader/Loader"

export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null ? JSON.parse(savClicks) : items;
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
        // використовуємо HTTP-функцію
        const data = await getAsyncImage("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);
  let searchText = ""
  let maxStoriges = 0;
  params.page = 1;

  const handleSearch = async (topic) => {
    params.page += 1;

    try {
      const dat = getAsyncImage(searchText);
      maxStoriges = Math.ceil(dat.totalHits / params.per_page); // бере участь коли закінчаться запити
      ImageGallery(dat.hits);
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
      if (dat.hits.length > 0 && dat.hits.length !== dat.totalHits) {
      }
      else
        if (dat.hits.length === 0) {
          // handlerErrorUzer(notify);
          notify()
          //hiden(refs.loadMoreBtn); hiden(refs.spinnerText);
          return
        } // show(refs.loadMoreBtn); // показати кнопку
      // // вставляю window.scrollBy після того як вставив в дом зображення (тут не через кверіселектор)
    } catch (error) {
      setError(true);
    }
    finally {

      if (params.page === maxStoriges) {
        notifyci()
        setLoading(false);
      }
    } console.log(topic);
  };

  const visibleTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase()));

  // function openModal() {
  //   setIsOpen(true);
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <>
      <div className={css.headers}>
        <SerchBar onSearch={handleSearch} onFilter={setFilter} />
      </div>
      <div>
        <div>
          {loading && <RotatingLoader />}
          {error && notifyli()}
          {articles.length > 0 && <ImageGallery items={articles} tasks={visibleTasks} />}
        </div>
        <>
          <LoadMoreBtn />
          {/* <button onClick={openModal}>Open Modal</button> */}
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          /> */}
          {/* <ImageModal /> */}
          {/* <ErrorMessage /> */}
        </>
      </div>
    </>
  )
}

//objects={objects} - old paramatars!
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


// !!!
// gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg (key to gallary)
