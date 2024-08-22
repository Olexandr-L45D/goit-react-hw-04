import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ items }) {
    return (
        <div className={css.container}>
            <ul className={css.list}>

                {items.map(({ objectID, url, title }) => (
                    <li className={css.item} key={objectID}>
                        <ImageCard obj={title} />
                        <a href={url} target="_blank" rel="noreferrer noopener">
                            {title}
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    );

};

