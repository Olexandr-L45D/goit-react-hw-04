import css from './LoadMoreBtn.module.css';
import { useRef, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function LoadMoreBtn({ onAdd }) {
    const formRef = useRef(1)
    const [cliks, setClik] = useState('');

    const handleScroll = () => {
        const dimsScrol = formRef.current.getBoundingClientRect();
        scrollTo({
            top: dimsScrol.y,
            behavior: "smooth",
        });
    };

    const handleClick = (values) => {
        onAdd(values);
        console.log(values);
        window.scrollTo(0, 0);
    };
    return <>
        <div className={css.container}>
            <form ref={formRef} className={css.styleBtn} onClick={handleClick}>
                <button className={css.button} type="button">
                    Load more
                </button>
            </form>
            <button onClick={handleScroll} className={css.buttonRef} type="clik"> {cliks} <FiArrowUpCircle /></button>
        </div>
    </>
}
