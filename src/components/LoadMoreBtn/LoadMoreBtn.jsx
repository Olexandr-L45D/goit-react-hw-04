import css from './LoadMoreBtn.module.css';


export default function LoadMoreBtn({ onAdd }) {


    const handleClick = (values) => {
        onAdd(values);
        console.log(values);

    };
    return <>
        <div className={css.container}>
            <form className={css.styleBtn} onClick={handleClick}>
                <button className={css.button} type="button">
                    Load more
                </button>
            </form>

        </div>
    </>
}
