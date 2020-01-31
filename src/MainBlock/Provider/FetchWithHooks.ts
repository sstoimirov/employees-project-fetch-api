import { useState, useEffect } from "react";
export function useFetch(url) {
    const [employees, setData]: any = useState([]);
    var headers = new Headers();
    const username = "hard"
    const password = username
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    async function fetchUrl() {
        const response = await fetch(url, {
            headers: headers
        });
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [employees];
}

export default useFetch