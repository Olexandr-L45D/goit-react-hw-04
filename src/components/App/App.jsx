import axios from "axios";
import css from './App.module.css'
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ColorRing from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import { getAsyncImage } from "../../articles-api"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelected] = useState(null);
  const [articles, setArticles] = useState([]);
  // const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1000);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null && JSON.parse(savClicks) && "";
  });
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

  function closeModal() {
    setIsOpen(false);
    setSelected(null)
  }

  return (
    <>
      <div className={css.headers}>
        <SearchBar onSearch={handleSearch} onFilter={setFilter} />
      </div>
      <div>
        <>
          {articles.length > 0 && <ImageGallery items={articles} onClick={openModal} />}
        </>
        <>
          {page >= totalPages && <ErrorMessage />}
          {error && <ErrorMessage />}
          {loading && <ColorRing />}
          {articles.length > 0 && !loading && (
            <LoadMoreBtn onAdd={handleLoadMore} />
          )}
          <ImageModal isOpen={isOpen} data={selectedPicture} onClose={closeModal} />
        </>
      </div>
    </>
  )
}















// в данному ДЗ зберігати в Локальне Сховище не потрібно
// const [topic, setTopic] = useState(() => {
//   const savClicks = window.localStorage.getItem("my-clicks");
//   return savClicks !== null && JSON.parse(savClicks) && "";
// });
// useEffect(() => {
//   const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
//   if (isLocalStorData) {
//     const data = localStorage.getItem("my-clicks");
//     setTopic(JSON.parse(data));
//   }
// }, []);
// useEffect(() => {
//   window.localStorage.setItem("my-clicks", JSON.stringify(topic));
// }, [topic]);


