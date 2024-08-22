import css from './ImageGallery.module.css';
//import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ items }) {
    return (
        <div className={css.item}>
            <ul>
                {items.map(({ objectID, url, title }) => (
                    <li key={objectID}>
                        <a href={url} target="_blank" rel="noreferrer noopener">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

};

