
import css from "./ErrorMessage.module.css"
// import { ErrorMessage } from "formik"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
const notifyli = () => toast('Whoops, something went wrong! Please try reloading this page!');
const notifyci = () => toast('Were sorry, but you ve reached the end of search results.');

export default function ErrorMessage() {

    return (
        <div className={css.item}>
            <div>notify()</div>
            <div>notifyli()</div>
            <div>notifyci()</div>
        </div>
    );
};

