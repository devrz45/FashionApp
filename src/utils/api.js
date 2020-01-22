import initialData from '../../mocks/data/HomeData';
import featuredData from '../../mocks/data/FeaturedData';
import itemDataSet from '../../mocks/data/ItemDataSet'

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
    console.log("ItemId:",id);
    setTimeout(() => {
        callback(itemDataSet[getIndex()])
    }, 1000);
}

function getIndex() {
    return Math.floor((Math.random() * 3));
}