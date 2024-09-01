import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ items, onClick }) {

    return (
        <main>
            <div >
                <ul className={css.list}>
                    {items.map((task) => (
                        <li className={css.item} key={task.id}>
                            <ImageCard onClick={() => onClick(task)} obj={task} >

                            </ImageCard>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </main >
    );
}

