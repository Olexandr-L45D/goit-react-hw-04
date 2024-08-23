import axios from "axios";


const ENDPOINT = "https://pixabay.com/api/";
const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";


const params = {
    key: API_KEY,
    q: "",
    image_type: 'photo',
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 15
};

export { params };

async function getAsyncImage(searchText) {
    params.q = searchText;
    const neWurls = new URLSearchParams(params);
    const response = await axios.get(`${ENDPOINT}?${neWurls}`)
    return response.data.hits;
    // return response.data;
};

export { getAsyncImage };

// import toast, { Toaster } from 'react-hot-toast';
// const notify = () => toast('Here is your toast.');
// Authorization: Client - ID gpxaaiPUteVQc - DhqqF3GLxbICUzWFNHSgvAwIWoWbg

//мій ключ з галереї :const API_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg"
//const YOUR_ACCESS_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg";
//axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";
// GET https://unsplash.com/oauth/authorize?client_id=PARENT_APPLICATION_CLIENT_ID&redirect_uri=https://mywordpressinstall.com/unsplash_callback&response_type=code&scope=public

// export const fetchArticlesWithTopic = async topic => {
//     const response = await axios.get(`/search?query=${topic}`);
//     return response.data.hits;
// };

// const doStuff = async () => {
//     try {
//         const users = await fetchArticlesWithTopic();
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// };

// doStuff();



// const ENDPOINT = "https://pixabay.com/api/";
// const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";


// const params = {
//     "access_token": "091343ce13c8ae780065ecb3b13dc903475dd22cb78a05503c2e0c69c5e98044",
//     "token_type": "bearer",
//     "scope": "public",
//     "created_at": "1588259748"
// }

// axios.get("https://jsonplaceholder.typicode.com/users", {
//     params: {
//         _limit: 7,
//         _sort: "username"
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

// {
//     "urls": {
//         "raw": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9",
//             "full": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80",
//                 "regular": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max",
//                     "small": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max",
//                         "thumb": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
//     },
//     // ... other photo fields
// }