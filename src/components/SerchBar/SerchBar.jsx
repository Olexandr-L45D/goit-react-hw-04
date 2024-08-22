
import css from "./SerchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
import { params } from "../../articles-api"
//import { CiSearch } from "react-icons/ci";
// Accept - Version: v1

export default function SerchBar({ onSearch }) {
    let searchText = ""
    let maxStoriges = 0;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        params.page = 1;
        searchText = evt.target.searchQuery.value.toLowerCase().trim();  //значення яке написав користувач(прибираєм пробіл та приводим до нижн регістра)
        // Якщо текстове поле порожнє, виводимо повідомлення  і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
            // Toaster("Please enter search term!")
            return;
        }
        // У протилежному випадку викликаємо пропс  і передаємо йому значення поля
        onSearch(topic);
        form.reset();
    };

    function handleLoadMore() {   // функція при події клік на кнопці- додавання нових порцій сторінок(збільшую знач page на один, відключаю кнопку, після запиту на сервер відмаловуємо розмітку і включаю як прийшов позитивний результат) 
        params.page += 1;
        disable(refs.loadMoreBtn, refs.spinnerText);

        setTimeout(async () => {
            try {
                const data = await getAsyncImage(searchText);

                renderGalleryMarkap(data.hits);
                const galleryItemScrol = document.querySelector('.gallery-item');
                const cardHeight = galleryItemScrol.getBoundingClientRect().height;
                window.scrollBy({                                                 // вставляю window.scrollBy після того як вставив в дом зображення
                    top: cardHeight * 2,
                    behavior: "smooth",
                });
                show(refs.spinnerText);
            } catch (error) {
                console.log(error);
                handlerErrorUzer(error);
            }
            finally {
                enable(refs.loadMoreBtn, refs.spinnerText);
                if (params.page === maxStoriges) {

                    iziToast.error({
                        title: 'Error',
                        message: "We're sorry, but you've reached the end of search results.",
                    });
                    refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
                    hiden(refs.loadMoreBtn); hiden(refs.spinnerText);
                }
            }
        }, 500); // затримка сеттаймаутом setTimeout на 0,5 секунди
    };

    return (
        <header className={css.header}>
            <div className={css.items}>
                <form onSubmit={handleSubmit}>
                    <input className={css.inputText} type="text"
                        placeholder="Search images and photos..." name="topic" />
                    <button onClick={handleLoadMore} className={css.btnBtn} type="submit">Search</button>
                    <Toaster />
                </form>
            </div>
        </header >
    );
};

// {/* <button className={css.btn}><CiSearch /></button> */}
// export default function SerchBar({ value, onSearch })
// export default function SerchBar({ value, onFilter }) {
//     return (
//         <div className={css.item}>
//             <h5 className={css.paragraf}>Search images and photos</h5>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => onFilter(e.target.value)}
//             />
//         </div>
//     );
// }

// finally {
//     enable(refs.loadMoreBtn, refs.spinnerText);
//     if (params.page === maxStoriges) {

//         iziToast.error({
//             title: 'Error',
//             message: "We're sorry, but you've reached the end of search results.",
//         });
//         refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//         hiden(refs.loadMoreBtn); hiden(refs.spinnerText);
//     }
// }}, 500);} // затримка сеттаймаутом setTimeout на 0,5 секунди



