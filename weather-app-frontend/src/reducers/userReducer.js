export const initialUser = {
    id: 0,
    username: "",
    email: "",
    token: "",
}

export const userReducer = ( state, action ) => {
    switch (action.type) {

        case "RESET":
            return initialUser;

        case "SET_USER":{
            return action.payload;
        }        

        default:
            return state;
    }
}