import { useState, useEffect } from 'react'
import axios from "axios"

export const useLoading = (props) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
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
    }, []);

    return { loading };

}
