import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ tasks, onDelete }) {
    return (
        <ul className={css.list}>
            {tasks.map((task) => (
                <li className={css.item} key={task.id} >
                    <ImageCard obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}


