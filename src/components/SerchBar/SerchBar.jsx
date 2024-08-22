
import css from "./SerchBar.module.css"
//import { CiSearch } from "react-icons/ci";

export default function SerchBar({ onSearch }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        // Якщо текстове поле порожнє, виводимо повідомлення  і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term!")
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

                    <input className={css.inputText} type="text"
                        placeholder="Search images and photos..." name="topic" />
                    <button className={css.btnBtn} type="submit">Search</button>

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



