import React, { useState, useEffect } from 'react';

/**
 * A hook that wraps the state logic to fetch some data asynchronously
 * and return the data
 * @param dataFetcher A function which fetches the data asynchronously
 */
export function useFetchData(dataFetcher) {
    const [data, setData] = useState(null);

    function handleFetchData(data) {
        setData(data);
    }

    useEffect(() => {
        /**
         * Ideally this will be a fetch call or a function making a server request for data
         * For our purpose it's a simple function that gets the data from a static file
         */
        dataFetcher(handleFetchData);
    },[]);

    return data;
}