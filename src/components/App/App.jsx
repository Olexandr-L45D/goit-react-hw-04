import axios from "axios";
import css from './App.module.css'
import { useState, useEffect } from "react";
// import { useMemo } from "react";
//import toast, { Toaster } from 'react-hot-toast';
//const notify = () => toast('enter a name.');
// const notifyli = () => toast('Whoops, something went wrong! Please try reloading this page!');
//const notifyci = () => toast('Were sorry, but you ve reached the end of search results.');
import SerchBar from "../SerchBar/SerchBar"
import ColorRing from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import { getAsyncImage } from "../../articles-api"
// import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
// import RefScrol from "../RefScrol/RefScrol"

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelected] = useState(null);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1000);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null && JSON.parse(savClicks) && "";
  });
  useEffect(() => {
    const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
    if (isLocalStorData) {
      const data = localStorage.getItem("my-clicks");
      setTopic(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("my-clicks", JSON.stringify(topic));
  }, [topic]);
  // перший фетч http на ефекті щоб спрацювало один раз при монтуванні
  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await getAsyncImage(topic, page);
        setArticles((prevState) => [...prevState, ...data.results]); // подвійне розпилення обовязкове тому що ми додаємо до вже існуючого масиву/сторінки
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
    console.log(topic);
  }, [page, topic]);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setArticles([]);
  };
  // функція handleLoadMore при події клік на кнопці- додавання нових порцій сторінок(збільшую знач page на один, відключаю кнопку, після запиту на сервер відмаловуємо розмітку і включаю як прийшов позитивний результат)
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const openModal = (data) => {
    setIsOpen(true);
    setSelected(data)
  };
  const afterOpenModal = (emag) => {
    setSelected(emag)
  };

  function closeModal() {
    setIsOpen(false);
    setSelected(null)
  }

  return (
    <>
      <div className={css.headers}>
        <SerchBar onSearch={handleSearch} onFilter={setFilter} />
      </div>
      <div>
        <>
          {articles.length > 0 && <ImageGallery items={articles} setPage={page + 1} />}
        </>
        <>
          {page >= totalPages && <b>END OF COLLECTION!!!!</b>}
          {error && <b>ERROR!!!</b>}
          {loading && <ColorRing />}
          {articles.length > 0 && !loading && (
            <LoadMoreBtn onAdd={handleLoadMore} />
          )}

          <ImageModal isOpen={openModal} data={selectedPicture} afteOpan={afterOpenModal} onClose={closeModal} />

          {/* <ErrorMessage /> */}
          {/* <RefScrol /> */}
        </>

      </div>
    </>
  )
}

