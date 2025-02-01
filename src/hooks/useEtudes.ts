import { useState, useEffect } from 'react';

export const useEtudes = (): boolean => {
    const [isEtudes, setIsEtudes] = useState<boolean>(false); // Par défaut, `isEtudes` est `false`

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const etudes = queryParams.get('e');
        if (etudes === '1') {
            setIsEtudes(true); // Active `isEtudes` si la valeur de `e` est "1"
        }
    }, []);

    return isEtudes;
};