const req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/posts/", false);
req.send(null);
const articles = JSON.parse(req.responseText);

const initialState = articles;

export default function posts(state = initialState) {
    return state;
}