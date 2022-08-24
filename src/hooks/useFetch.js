import {useState} from "react";

export const useFetch = (callback) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setError('')
            setLoading(true)
            await callback()
        } catch (e) {
            setLoading(false)
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return [fetching, loading, error]
}