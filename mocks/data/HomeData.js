export default {
    sections: {
        top: {
            name: 'Categories',
            items: [
                {
                    title: 'Woman',
                    image: 'image1',
                    id: '2783'
                },
                {
                    title: 'Man',
                    image: 'image2',
                    id: '282'
                },
                {
                    title: 'Kids',
                    image: 'image3',
                    id: '9021'
                }
            ],
            position: 'top',
            hasMore: false
        },
        mid: {
            name: 'Featured',
            items: [
                {
                    itemId: 2235,
                    image: 'image4',
                    price: 32.33,
                    title: 'Woman T-Shirt'
                },
                {
                    itemId: 1783,
                    image: 'image5',
                    price: 25.00,
                    title: 'Man T-Shirt'
                },
                {
                    itemId: 5902,
                    image: 'image6',
                    price: 18.53,
                    title: 'Woman Shoes'
                }
            ],
            position: 'mid',
            hasMore: true
        },
        bottom: {
            name: 'Trending',
            items: [
                {
                    itemId: 1435,
                    image: 'image7',
                    price: 21.00,
                    title: 'Woman T-Shirt'
                },
                {
                    itemId: 1783,
                    image: 'image8',
                    price: 42.00,
                    title: 'Man T-Shirt'
                },
                {
                    itemId: 5902,
                    image: 'image9',
                    price: 45.00,
                    title: 'Woman Shoes'
                }
            ],
            position: 'bottom',
            hasMore: false
        }
    }
}