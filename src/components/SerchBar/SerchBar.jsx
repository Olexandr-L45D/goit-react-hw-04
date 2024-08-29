
import css from "./SerchBar.module.css"
import { useRef, useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
// import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { CiSearch } from "react-icons/ci";

export default function SerchBar({ value, onSearch, onFilter }) {
    const formRef = useRef(1)
    const [cliks, setClik] = useState('');
    const dimsScrol = formRef.current.getBoundingClientRect();

    const hendelScrol = () => {
        window.scrollTo(
            {
                top: dimsScrol.y,
                behavior: "smooth"
            }
        )
        formRef.current += 1;
        setClik(cliks + 1)
        console.log(formRef);
    }

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
                <form ref={formRef} className={css.form} onSubmit={handleSubmit}>

                    <button className={css.submitButton} type="submit"> <CiSearch /></button>
                    <Toaster />
                    {/* <ErrorMessage /> */}
                    <input className={css.input}
                        placeholder="Please enter the name"
                        name="topic"
                        required
                        autoFocus type="text" value={value}
                        onChange={(e) => onFilter(e.target.value)}
                    />
                </form>
                <button onClick={hendelScrol} className={css.buttonRef} type="clik"> {cliks} <FiArrowUpCircle /></button>
            </div>
        </header >
    );
};




