import React from "react";
import { useFetch } from "../../Provider/Fetch";
export const Employees = () => {

    const [employee, loading] = useFetch();
    return (
        <>
            <h1>Photos</h1>
            {loading ? (
                "Loading..."
            ) : (
                    <ul>
                        {employee.map(({ id, title, url }) => (
                            <li key={`photo-${id}`}>
                                <img alt={title} src={url} />
                            </li>
                        ))}
                    </ul>
                )}
        </>
    );
}