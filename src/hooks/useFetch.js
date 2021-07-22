import { useEffect, useState } from "react";

function useFetch(url){

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(result => {
                setData(result);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage('There is an Error!!!');
            })

    }, [url])

    return { data, isLoading, errorMessage };

}

export default useFetch