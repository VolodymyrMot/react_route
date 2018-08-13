const req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/comments/", false);
req.send(null);
const comments = JSON.parse(req.responseText);

const initialState = comments;

export default function posts(state = initialState) {
    return state;
}