import { useState, useEffect } from 'react'
import axios from "axios"

export const useLoading = (props) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                await axios.get(
                    `${props}`,
                    {
                        withCredentials: true,
                    }
                );
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        })();
    }, [props]);

    return { loading };

}
