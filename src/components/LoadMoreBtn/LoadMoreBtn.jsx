import css from './LoadMoreBtn.module.css';


export default function LoadMoreBtn({ onAdd }) {


    const handleClick = (values) => {
        onAdd(values);
        // console.log(values);
    };
    return <>
        <div className={css.container}>
            <form className={css.styleBtn} >
                <button className={css.button} onClick={handleClick} type="button">
                    Load more
                </button>
            </form>

        </div>
    </>
}
