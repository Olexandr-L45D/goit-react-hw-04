import axios from "axios";
// import toast, { Toaster } from 'react-hot-toast';
// const notify = () => toast('Here is your toast.');

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async topic => {
    const response = await axios.get(`/search?query=${topic}`);
    return response.data.hits;
};

// axios.get("https://jsonplaceholder.typicode.com/users", {
//     params: {
//         _limit: 7,
//         _sort: "name"
//     }
// });
// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 40;
// In our case total number of pages is calculated on frontend
const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener("click", async () => {
//     // Check the end of the collection to display an alert
//     if (page > totalPages) {
//         return iziToast.error({
//             position: "topRight",
//             message: "We're sorry, there are no more posts to load"
//         });
//     }

//     try {
//         const posts = await fetchPosts();
//         renderPosts(posts);
//         // Increase the group number
//         page += 1;

//         // Replace button text after first request
//         if (page > 1) {
//             fetchPostsBtn.textContent = "Fetch more posts";
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });

// const fetchUsers = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     return response.data;
// };

// const doStuff = async () => {
//     try {
//         const users = await fetchUsers();
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// };

// doStuff();