import css from "./ImageCard.module.css"
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import ImageModal from "../ImageModal/ImageModal"

export default function ImageCard({ obj: { user: { first_name, instagram_username }, likes, tags, urls: { small, regular } } }, isOpen) {
    const handleClick = (velue) => {
        isOpen(velue);
        console.log(velue);

    };
    return (

        <div className={css.card}  >
            <ImageModal >
                <><img onClick={handleClick} className={css.imag} src={regular} alt={tags} /></>
            </ImageModal>

            <img onClick={handleClick} className={css.imag} src={small} alt={tags} />
            {/* <img className={css.imag} src={small} alt={tags} /> */}

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

// { <ImageModal onClick={() => setIsOpen(modalIsOpen + 1)} /> }
// { <ImageModal overlayRef={node => (this.overlayRef = node)}
//contentRef = { node => (this.contentRef = node)} onClick={() => setIsOpen(modalIsOpen + 1)} /> } 
