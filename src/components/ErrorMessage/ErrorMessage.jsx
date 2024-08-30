
import css from "./ErrorMessage.module.css"
import toast, { Toaster } from 'react-hot-toast';
const notifEnter = () => toast('enter a name.');
const notifFalse = () => toast('Whoops, something went wrong! Please try reloading this page!');
const notifFinish = () => toast('Were sorry, but you ve reached the end of search results.');

export default function ErrorMessage() {
    const newRequest = () => {
        notifEnter()
    }
    const errorMasseg = () => {
        notifFalse()
    }
    const finishColections = () => {
        notifFinish()
    }

    // if (form.elements.topic.value.trim() === "") {
    //     notify()
    //     return;
    // }

    return (
        <div className={css.notifCard}>
            <ErrorMessage >
                <div className={css.notifi} onSubmit={newRequest}>Enter</div>
                <div className={css.notifi} onSubmit={errorMasseg}>Error</div>
                <div className={css.notifi} onClick={finishColections}>Finish</div>
            </ErrorMessage>
        </div>
    );
};

// { loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p> }
// {
//     error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//     )
// }

