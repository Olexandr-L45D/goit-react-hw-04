import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg";

async function getAsyncImage(query, page = 1) {

    const response = await axios.get(`/search/photos`, {
        params: {
            client_id: API_KEY,
            query: query,
            image_type: 'photo',
            orientation: "landscape",
            safesearch: true,
            page,
            per_page: 12,
        },
    });
    return {
        results: response.data.results,
        total_pages: response.data.total_pages,
    };
};
export { getAsyncImage };


// приклад старої бібліотеки (працює)

// const ENDPOINT = "https://pixabay.com/api/";
// const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";

// const params = {
//     key: API_KEY,
//     q: "",
//     image_type: 'photo',
//     orientation: "horizontal",
//     safesearch: true,
//     page: 1,
//     per_page: 16
// };
// export { params };

// async function getAsyncImage(searchText) {
//     params.q = searchText;
//     const neWurls = new URLSearchParams(params);
//     const response = await axios.get(`${ENDPOINT}?${neWurls}`)
//     return response.data.hits;
// };
// export { getAsyncImage };



//мій ключ з галереї :const API_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg"
//const YOUR_ACCESS_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg";
//axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";



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