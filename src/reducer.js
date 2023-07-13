export const initialState = {
    user: null,
    product: {}

}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.product
            }

        // case 'FIND_USER':
        //     try {
        //         fetch('http://localhost:6000/api/auth/getuser', {
        //             method: 'POST',
        //             headers: {
        //                 'auth-token': action.token
        //             }
        //         })
        //             .then(response => response.json())
        //             .then(json => {
        //                 const data = json.user
        //                 console.log(data)
        //                 return {

        //                     user: data
        //                 }

        //             });
        //     } catch (err) {
        //         alert("Internal server error")
        //         return { state }
        //     }

        //     break;


        default:
            return { ...state };

    }
}

export default reducer;