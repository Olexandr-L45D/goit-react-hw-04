
import css from "./SerchBar.module.css"


export const SerchBar = ({ onSearch }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        // Якщо текстове поле порожнє, виводимо повідомлення 
        // і припиняємо виконання функції.
        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term!")
            return;
        }

        // У протилежному випадку викликаємо пропс 
        // і передаємо йому значення поля
        onSearch(topic);
        form.reset();
    };

    return (
        <div className={css.item}>

            <form onSubmit={handleSubmit}>
                <input type="text" name="topic" placeholder="Search images and photos..." />
                <button>Search</button>
            </form>

        </div>
    );
};


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



