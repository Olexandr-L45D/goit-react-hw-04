import css from "./ImageCard.module.css"
import axios from "axios";

export default function ImageCard({ obj: { id, uzername, lak, favorit } }) {
    return (

        <div className={css.card}>
            <img src="" alt="" />
            <p>{uzername}</p>
            <p>{lak}</p>
            <p>{favorit}</p>
        </div>

    );
}
