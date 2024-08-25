import css from './LoadMoreBtn.module.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');
import { nanoid } from 'nanoid'
import { useState, useEffect, useRef } from "react";

export default function LoadMoreBtn({ onAdd }) {
    const idId = nanoid();
    //  const btnRef = useRef();
    // useEffect(() => {
    //     // Ефект виконується після монтування,
    //     console.log("useEffect: ", btnRef.current);
    // });
    const handleSubmit = (values, actions) => {
        values.id = idId;
        onAdd(values);
        console.log(values);
        // actions.resetForm();
        //console.log("handleClick: ", btnRef.current);
    };

    return <>
        <div className={css.container}>
            <form className={css.styleBtn} onSubmit={handleSubmit}>
                <button className={css.btn} type="submit">
                    Load more
                </button>
            </form>
        </div>
    </>
}
