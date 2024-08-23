import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ items }) {
    return (
        <main>
            <div >
                <ul className={css.list}>
                    {items.map((task) => (
                        <li className={css.item} key={task.id} >
                            <ImageCard obj={task} />
                            <a href={task.url} target="_blank" rel="noreferrer noopener">
                               
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main >
    );
}



// export default function ImageGallery({ items }) {
//     return (
//         <main>
//             <div >

//                 <ul className={css.list}>

//                     {items.map(({ id, url, username }) => (
//                         <li className={css.item} key={id}>
//                             <ImageCard obj={use} />
//                             <a href={url} target="_blank" rel="noreferrer noopener">
//                                 {username}
//                             </a>

//                         </li>
//                     ))}
//                 </ul>

//             </div>
//         </main>
//     );

// };

// export default function ImageGallery({ items }) {
//     return (
//         <main>
//             <div >

//                 <ul className={css.cardCommant}></ul>
// const markup = images
//     .map((image) =>
//         ` 
//     <li class="gallery-item">
//     <a class="gallery-link" href="${image.largeImageURL}">
//     <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" title="${image.name}"/></a>
//     <div class="gallery-paragraf">
//     <p class="gallery-commant">likes ${image.likes}</p>
//     <p class="gallery-commant">views ${image.views}</p>
//     <p class="gallery-commant">comments ${image.comments}</p>
//     <p class="gallery-commant">downloads ${image.downloads}</p>
//     </div>
//     </li> 
//      ` )
//     .join("")
// galleryContainer.insertAdjacentHTML("beforeend", markup);
// lightbox.refresh();
      
//   };

// className = { css.container }

// const markup = images
//     .map((image) =>
//         `
//     <li class="gallery-item">
//     <a class="gallery-link" href="${image.largeImageURL}">
//     <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" title="${image.name}"/></a>
//     <div class="gallery-paragraf">
//     <p class="gallery-commant">likes ${image.likes}</p>
//     <p class="gallery-commant">views ${image.views}</p>
//     <p class="gallery-commant">comments ${image.comments}</p>
//     <p class="gallery-commant">downloads ${image.downloads}</p>
//     </div>
//     </li>
//      ` )
//     .join("")
// galleryContainer.insertAdjacentHTML("beforeend", markup);
// lightbox.refresh();

