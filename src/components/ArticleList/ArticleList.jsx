import { useEffect, useState } from "react";
import axios from "axios";
import css from "./ArticleList.module.css"

export default function ArticleList({ items }) {
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