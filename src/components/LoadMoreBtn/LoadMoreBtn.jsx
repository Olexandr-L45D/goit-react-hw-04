import css from './LoadMoreBtn.module.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

import { useState, useEffect, useRef } from "react";

export default function LoadMoreBtn() {
    const [clicks, setClicks] = useState(0);
    // console.log("App: ", btnRef.current);
    //  const btnRef = useRef();
    // useEffect(() => {
    //     // Ефект виконується після монтування,
    //     console.log("useEffect: ", btnRef.current);
    // });

    // const handleClick = () => {
    //     // Кліки будуть після монтування,
    //     console.log("handleClick: ", btnRef.current);
    // };

    return <>
        <div className={css.container}>

            <div className={css.styleBtn}>
                <>
                    <button className={css.btn} onClick={() => setClicks(clicks + 1)}>
                        Load more : {clicks}
                    </button>
                    {/* <button ref={btnRef} onClick={handleClick}> {notify} </button> */}
                </>

            </div>

        </div>
    </>
}
