import css from "./ImageCard.module.css"
import axios from "axios";

export default function ImageCard({ obj: { likes, vies, comments, tags, webformatURL } }) {
    return (

        <div className={css.card}>
            <img className={css.imag} src={webformatURL} alt={tags} />
            <div className={css.cardCommant}>
                {/* <p className={css.commant}>{username}</p> */}
                <div className={css.comItem}>
                    <p className={css.commant}>vies: {vies}</p>
                </div>
                <div className={css.comIte}>
                    <p className={css.commant}>likes: {likes}</p>
                </div>
                <div className={css.comIt}>
                    <p className={css.commant}>comments: {comments}</p>
                </div>
            </div>
        </div>

    );
}
