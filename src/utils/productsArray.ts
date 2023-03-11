type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
    id: 1,
    title: "iPhone 14 Pro",
    description: "This Iphone 14 Pro",
    type: "phone",
    capacity: "512",
    price: 999,
    image: '/images/1.jpg'
},
    {
        id: 2,
    title: "iPhone 13 Pro",
    description: "This Iphone 13 Pro",
    type: "phone",
    capacity: "256",
    price: 899,
    image: '/images/2.jpg'
},
    {
        id: 3,
    title: "iPhone 12 Pro",
    description: "This Iphone 12 Pro",
    type: "phone",
    capacity: "256",
    price: 799,
    image: '/images/3.jpg'
},
    {
        id: 4,
    title: "iPhone 11 Pro",
    description: "This Iphone 11 Pro",
    type: "phone",
    capacity: "128",
    price: 699,
    image: '/images/4.jpg'
},
    {
        id: 5,
    title: "iPhone XR",
    description: "This Iphone XR",
    type: "phone",
    capacity: "128",
    price: 599,
    image: '/images/5.jpg'
},
    {
        id: 6,
    title: "iPhone X",
    description: "This Iphone X",
    type: "phone",
    capacity: "64",
    price: 499,
    image: '/images/6.jpg'
}
];

export default productsArray