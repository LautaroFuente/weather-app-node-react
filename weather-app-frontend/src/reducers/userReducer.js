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
        default:
            return state;
    }
}