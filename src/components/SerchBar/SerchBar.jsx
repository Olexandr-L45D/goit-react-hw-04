import css from "./SerchBar.module.css"


export default function SerchBar({ value, onFilter }) {
    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Search images and photos</h5>
            <input
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    );
}


