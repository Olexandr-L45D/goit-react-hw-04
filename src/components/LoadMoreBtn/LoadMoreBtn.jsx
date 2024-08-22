import css from './LoadMoreBtn.module.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');
export default function LoadMoreBtn(params) {
    return <>
        <div className={css.container}>

            <div className={css.styleBtn}>
                <button className={css.btn} onClick={notify}>Load more</button>
                <Toaster />
            </div>

        </div>
    </>

}