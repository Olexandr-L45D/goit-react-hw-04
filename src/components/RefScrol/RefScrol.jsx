import { useRef, useState, useEffect } from "react";
import css from "./RefScrol.module.css"
import { FiArrowUpCircle } from "react-icons/fi";

export default function RefScrol() {
    const velueRef = useRef(1)
    const [cliks, setClik] = useState('');
    // useEffect(() => {
    //     console.log(velueRef);
    // }, [])
    const hendeVelCheng = () => {
        velueRef.current += 1;
        console.log(velueRef);
    }

    // const hendelScrol = () => {
    // console.log(velueRef);
    // }

    const hendelClikChendg = () => {
        setClik(cliks + 1)
        // console.log(velueRef);
    }
    return (
        <div>

            <h3>Hello ref</h3>
            <button onClick={hendeVelCheng}>{velueRef.current}</button>
            <button onClick={hendelClikChendg} className={css.buttonRef} type="clik"> {cliks} <FiArrowUpCircle /></button>
            {/* <button onClick={hendelScrol} className={css.buttonRef} type="clik"> {cliks} <FiArrowUpCircle /></button> */}

        </div>
    )
}