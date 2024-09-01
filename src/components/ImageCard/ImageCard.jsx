import css from "./ImageCard.module.css"
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export default function ImageCard({ obj, onClick }) {

    const {
        user: { first_name, instagram_username }, likes, tags, urls: { small }
    } = obj

    return (

        <div className={css.card}  >

            <img className={css.imag} src={small} alt={tags} onClick={onClick} />

            <div className={css.cardCommant}>
                <div className={css.comItem}>
                    <p className={css.commant}> <FiUser className={css.icon} /> {first_name}</p>
                </div>
                <div className={css.comIte}>
                    <p className={css.commant}><FiThumbsUp className={css.icon} /> {likes}</p>
                </div>
                <div className={css.comIt}>
                    <p className={css.commant}><FiInstagram className={css.icon} /> {instagram_username}</p>
                </div>

            </div>
        </div>

    );
}
