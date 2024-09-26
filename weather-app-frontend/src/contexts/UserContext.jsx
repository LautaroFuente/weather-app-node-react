import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [stateUser, dispatchUser] = useReducer(userReducer);

    return <UserContext.Provider value={ {stateUser, dispatchUser}}>
        {children}
    </UserContext.Provider>
}