import initialData from '../../mocks/data/HomeData';
import featuredData from '../../mocks/data/FeaturedData';
import itemDataSet from '../../mocks/data/ItemDataSet';

/**
 * Ideally this will be a fetch call or a function making a server request for data
 * instead of a setTimeout. Async behaviour is all that is needed for basic mocking.
 * For our purpose a simple function that gets the data from a static file will suffice
 */

export function getInitialData(callback) {
    setTimeout(() => {
        callback(initialData)
    }, 1000);
}

export function getFeaturedData(callback) {
    setTimeout(() => {
        callback(featuredData)
    }, 1000);
}

export function getItemDetails(id, callback) {
    /**
     * fetches a random data to display each time the call is made to add
     * variablility to the app.
     */
    setTimeout(() => {
        callback(itemDataSet[getIndex()])
    }, 1000);
}

export function getAuthenticationStatus(emailId, password, callback) {
    console.log(emailId);
    console.log(password);
    setTimeout(() => {
        let data = {
            success: true,
            authToken: '6d7fd9f0-8bd7-43b6-9b6d-fb2712698b39'
        }
        callback(data);
    }, 1000);
}

function getIndex() {
    return Math.floor((Math.random() * 3));
}