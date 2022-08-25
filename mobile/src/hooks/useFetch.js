import { useEffect, useReducer } from "react";

   function reducer(state, {type, ResponseJSON, error}) { 
    switch (type) {
            case 'loading':
                return {...state, isLoading: true};

            case "success":
                return {
                    
                    ResponseJSON,
                    error: error,
                    isLoading: false,
                };
            case    "error": 
            return {ResponseJSON:null, isLoading: false, error: error};
            case 'default': 
                throw new Error("Uknown action type");
            }        
   }   
export function useFetch (url) {
    
        const [state, dispatch] = useReducer(reducer,{
            ResponseJSON: null,
            isLoading: true,
            error: null,

        });
    useEffect(() =>{

        const callFetch = async () => {
                let shouldCancel = false;

                dispatch({type: 'loading'});
                try {
                    const response = await fetch(url);
                   
                    const ResponseJSON = await response.json();
                    console.log(ResponseJSON);
                    if (shouldCancel) return;
                    dispatch({type: 'success',ResponseJSON});
                   
                }catch(error) {
                    if (shouldCancel) return;
                    dispatch({type: 'error',error});
                }

            }
        callFetch();
        return () => (shouldCancel = true);

    },  [])
    console.log(state);
    return state;
}