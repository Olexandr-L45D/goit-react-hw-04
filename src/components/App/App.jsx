import axios from "axios";
import css from './App.module.css'
import { useState, useEffect } from "react";
import { useMemo } from "react";
//import toast, { Toaster } from 'react-hot-toast';
//const notify = () => toast('enter a name.');
// const notifyli = () => toast('Whoops, something went wrong! Please try reloading this page!');
//const notifyci = () => toast('Were sorry, but you ve reached the end of search results.');
import SerchBar from "../SerchBar/SerchBar"
import RotatingLoader from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import { getAsyncImage } from "../../articles-api"
// import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
var colors = ["#74B087", "#DE7300", "#74B087"];

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null && JSON.parse(savClicks);
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
  //let maxStoriges = 1000;
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      setQuery(topic)
      setPage(1)
      // використовуємо HTTP-функцію
      const data = await getAsyncImage(topic);
      // maxStoriges = Math.ceil(data.total / data.total_pages); // бере участь коли закінчаться запити
      setPage(page + 1)
      setArticles(data.results);
      setTotalPage(data.total_pages)
      // if (data.results.length > 0 && data.results.length !== data.total_pages) {
      // }
      // else
      //   if (data.results.length === 0) {
      //     notify()
      //     //hiden(refs.loadMoreBtn); hiden(refs.spinnerText);
      //     return
      //   } // show(refs.loadMoreBtn); // показати кнопку
      // // // вставляю window.scrollBy після того як вставив в дом зображення (тут не через кверіселектор)
    } catch (error) {
      setError(true);
    }
    finally {

      // if (data.results === maxStoriges) {
      //   notifyci()
      //   setLoading(false);
      // }

    } console.log(topic);
  };

  const visibleTasks = useMemo(() => tasks.filter((task) =>
    task.name.toLowerCase().includes(query)),
    [tasks, query]
  );

  return (
    <>
      <div className={css.headers}>
        <SerchBar onSearch={handleSearch} onFilter={setFilter} />
      </div>
      <div>
        <>
          {loading && <RotatingLoader />}
          {articles.length > 0 && <ImageGallery items={articles} tasks={visibleTasks} />}
        </>
        <>
          <LoadMoreBtn />

          {/* <ImageModal onClick={() => setIsOpen(modalIsOpen + 1)} /> */}
          <ImageModal onClick={() => setIsOpen(modalIsOpen + 1)}>
            <button>Modal</button></ImageModal>

          {/* <ErrorMessage /> */}
        </>
        <>
          {/* <button onClick={() => setClicks(clicks + 1)}>
            Number of clicks: {clicks}
          </button> */}
          {/* <ul>
            {filtereImages.map(planet => (
              <li key={planet}>{planet}</li>
            ))}
          </ul> */}
        </>

      </div>
    </>
  )
}

// tasks = { visibleTasks } 

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
