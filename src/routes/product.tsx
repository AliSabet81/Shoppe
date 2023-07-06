import product1 from "../../public/product1.png"
import product2 from "../../public/product2.png"
import product3 from "../../public/product3.png"
import product4 from "../../public/product4.png"
import product5 from "../../public/product5.png"
import product6 from "../../public/product6.png"

export interface IProductCard {
    img: string,
    name: string,
    price:string,
    index:number
}

export const Product : IProductCard[] =  [
    {
        img:product1,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:1
    },
    {
        img:product2,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:2
    },
    {
        img:product3,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:3
    },
    {
        img:product4,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:4
    },
    {
        img:product5,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:5
    },
    {
        img:product6,
        name: "Lira Earrings",
        price:"$ 20,00",
        index:6
    },
]