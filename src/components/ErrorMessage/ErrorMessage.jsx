
import css from "./ErrorMessage.module.css"

export default function ErrorMessage({ error }) {

    return (
        <div className={css.notifCard}>
            <h3 className={css.notifi}>{error}</h3>

        </div>
    );
};


