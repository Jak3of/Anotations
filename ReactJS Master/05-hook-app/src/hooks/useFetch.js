import { useEffect, useState } from "react";

const localCache = {

}


export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    },[url])

    const setLoadingState = () => {
        setState({
            data : null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async () => {


        // si existe en cache
        if(localCache[url]){
            console.log(' usando cache')
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }


        setLoadingState();



        const res = await fetch(url)

        await new Promise(resolve => setTimeout(resolve, 1000))

        if(!res.ok){
            setState({
                ...state,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            });
            return;
        }
        const data = await res.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // Guardar en cache

        localCache[url] = data;


    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error,
    }



}