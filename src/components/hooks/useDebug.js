import { useState, useEffect } from "react";

const useDebug = () => {
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setDebug(queryParams.get("debug") === "1");
    }, []); // S'exécute une fois au montage

    return debug;
};

export default useDebug;
