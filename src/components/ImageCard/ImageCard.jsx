import css from "./ImageCard.module.css"
import axios from "axios";

export default function ImageCard({ obj: { id, name, lak, favorit } }) {
    return (

        <div className={css.item}>
            <img src="" alt="" />
            <p>{name}</p>
            <p>{lak}</p>
            <p>{favorit}</p>
        </div>

    );
}
