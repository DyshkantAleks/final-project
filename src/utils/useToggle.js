import { useState, useCallback } from 'react';


export const useToggle = (initialValue = false) => {
    const [inFavorite, setInFavorite] = useState(initialValue);

    const toggle = useCallback(() => {
        setInFavorite(value => !value);
    }, []);
    return [inFavorite, toggle];
};