import css from "./ImageCard.module.css"
import { FcInfo } from "react-icons/fc";

export default function ImageCard({ obj: { user: { first_name, instagram_username }, likes, tags, urls: { small, regular } } }) {
    return (

        <div className={css.card}>
            <a className={css.imagLag} href={regular}></a>
            <img className={css.imag} src={small} alt={tags} />
            <div className={css.cardCommant}>
                {/* <p className={css.commant}>{username}</p> */}
                <div className={css.comItem}>
                    <p className={css.commant}>Autor: {first_name}</p>
                </div>
                <div className={css.comIte}>
                    <p className={css.commant}>likes: {likes}</p>
                </div>
                <div className={css.comIt}>
                    <p className={css.commant}><FcInfo className={css.icon} /> {instagram_username}</p>
                </div>

            </div>
        </div>

    );
}
