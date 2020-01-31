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
         * NOTE: @param dataFetcher could be made to return a promise to use with async await but
         * for the sake of simplicity and keeping the mocks as easy to understand as possible
         * a simple callback is used.
         * Plus @hook useEffect doesn't accept async functions as input since they return a
         * promise and not a clean-up function as expected by useEffect. We need to implement a
         * IIFE.
         */
        dataFetcher(handleFetchData);
    },[]);

    return data;
}