import blog1 from "../../public/blog01.png"
import blog2 from "../../public/blog02.png"
import blog3 from "../../public/blog03.png"
import blog4 from "../../public/blog04.png"
import { IBlogCard } from "../types"





export const Blogs : IBlogCard[] = [
    {
        img: blog1 ,
        category: "Fashion" ,
        date: "October 8, 2020" ,
        title: "Top Trends From Spring" ,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... " ,
        path: "/blog/Fashion/TopTrendsFromSpring"
    },
    {
        img: blog2 ,
        category: "Style" ,
        date: "October 8, 2020" ,
        title: "Top Trends From Spring" ,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... " ,
        path: "/blog/Style/TopTrendsFromSpring"
    },
    {
        img: blog3 ,
        category: "Accessories" ,
        date: "October 8, 2020" ,
        title: "Top Trends From Spring" ,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... " ,
        path: "/blog/Accessories/TopTrendsFromSpring"
    },
    {
        img: blog4 ,
        category: "Season" ,
        date: "October 8, 2020" ,
        title: "Top Trends From Spring" ,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... " ,
        path: "/blog/Season/TopTrendsFromSpring"
    }
]