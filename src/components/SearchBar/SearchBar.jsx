
import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiNavigation2 } from "react-icons/fi";

export default function SearchBar({ value, onSearch, onFilter }) {

    const formRef = useRef(1)
    const [cliks, setClik] = useState('');

    const handleScroll = () => {
        const dimsScrol = formRef.current.getBoundingClientRect();
        scrollTo({
            top: dimsScrol.y,
            behavior: "smooth",
        });
    };
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
        window.scrollTo(0, 1);
        form.reset();
    };
    return (
        <div>

            <header className={css.header}>
                <div className={css.items}>
                    <form ref={formRef} className={css.form} onSubmit={handleSubmit}>

                        <button className={css.submitButton} type="submit"> <CiSearch /></button>
                        <Toaster />

                        <input className={css.input}
                            placeholder="Please enter the name"
                            name="topic"
                            required
                            autoFocus type="text" value={value}
                            onChange={(e) => onFilter(e.target.value)}
                        />
                    </form>
                    <button onClick={handleScroll} className={css.buttonRef} type="clik"> {cliks} <FiNavigation2 /></button>
                </div>
            </header >


        </div>
    );
};




