
import css from "./SerchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
//import ErrorMessage from "../ErrorMessage/ErrorMessage"
//import { CiSearch } from "react-icons/ci";


export default function SerchBar({ value, onSearch, onFilter }) {
    // let searchText = ""

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value.toLowerCase().trim();

        // Якщо текстове поле порожнє, виводимо повідомлення ('enter a name.') і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
            notify()
            return;
        }
        // У протилежному випадку викликаємо пропс  і передаємо йому значення поля
        onSearch(topic);
        form.reset();
    };

    return (
        <header className={css.header}>
            <div className={css.items}>
                <form onSubmit={handleSubmit}>
                    <input className={css.inputText} type="text" value={value}
                        onChange={(e) => onFilter(e.target.value)}
                        placeholder="Search images and photos..." name="topic" />
                    <button className={css.btnBtn} type="submit">Search</button>
                    <Toaster />
                </form>
            </div>
        </header >
    );
};



// додавав іконку на батон, працює але треба в середину інпута
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

// function handleLoadMore() {   // функція при події клік на кнопці- додавання нових порцій сторінок(збільшую знач page на один, відключаю кнопку, після запиту на сервер відмаловуємо розмітку і включаю як прийшов позитивний результат)
//     params.page += 1;
//     disable(refs.loadMoreBtn, refs.spinnerText);

//     setTimeout(async () => {
//         try {
//             const data = await getAsyncImage(searchText);

//             renderGalleryMarkap(data.hits);
//             const galleryItemScrol = document.querySelector('.gallery-item');
//             const cardHeight = galleryItemScrol.getBoundingClientRect().height;
//             window.scrollBy({                                                 // вставляю window.scrollBy після того як вставив в дом зображення
//                 top: cardHeight * 2,
//                 behavior: "smooth",
//             });
//             show(refs.spinnerText);
//         } catch (error) {
//             console.log(error);
//             handlerErrorUzer(error);
//         }
//         finally {
//             enable(refs.loadMoreBtn, refs.spinnerText);
//             if (params.page === maxStoriges) {
//                 notifyci()
//                 //hiden(refs.loadMoreBtn); hiden(refs.spinnerText);
//             }
//         }
//     }, 500); // затримка сеттаймаутом setTimeout на 0,5 секунди
// };




