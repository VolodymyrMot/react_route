const req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/posts/", false);
req.send(null);
const articles = JSON.parse(req.responseText);

const initialState = articles;

export default function posts(state = initialState, action) {
    if(action.type === 'ADD_POST' && action.payload.title !== '' && action.payload.body !== ''){
        return[
            ...state, action.payload
        ];
    }else if(action.type === 'DELETE_POST') {
        console.log(action.payload);
        for (let i = 0; i < state.length; i++) {
            if (state[i] === action.payload) {
                state.splice(i, 1);
                return [...state];
            }
        }
    }
    return state;
}