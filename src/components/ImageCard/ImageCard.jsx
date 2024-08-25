import css from "./ImageCard.module.css"
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
// import ImageModal from "../ImageModal/ImageModal"

export default function ImageCard({ obj: { user: { first_name, instagram_username }, likes, tags, urls: { small, regular } } }) {
    return (

        <div className={css.card}  >
            {/* <a className={css.imagLag} href={regular}></a> */}
            <img className={css.imag} src={small} alt={tags} />
            {/* {<ImageModal onClick={() => setIsOpen(modalIsOpen + 1)} />} */}

            <div className={css.cardCommant}>
                <div className={css.comItem}>
                    <p className={css.commant}>Autor: {first_name}</p>
                </div>
                <div className={css.comIte}>
                    <p className={css.commant}><FiThumbsUp className={css.icon} /> {likes}</p>
                </div>
                <div className={css.comIt}>
                    <p className={css.commant}><FiUser className={css.icon} /> {instagram_username}</p>
                </div>

            </div>
        </div>

    );
}

// { <ImageModal onClick={() => setIsOpen(modalIsOpen + 1)} /> } 
