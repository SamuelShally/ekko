import { useAuthContext } from "./useAuthContext";

//To remove, do these 2 things
//1. update the global state 
//2. delete from the local storage
export const useLogout = () =>{
    const { dispatch } = useAuthContext();

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type: 'LOGOUT'})

    }
    return {logout}
}