import ProductSwiper from "../../components/productSwiper";
import product from "../../../public/product1.png";
import product1 from "../../../public/product2.png";
import product2 from "../../../public/product3.png";
import product3 from "../../../public/product4.png";
import { Button, IconButton, Typography } from "@mui/material";
import { ROUTES } from "../../routes";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useState } from "react";
import ProductInformation from "./Information";
import ProductReviews from "./reciews";
import SimilarProduct from "../../components/similarProduct";
const ProductPage = () => {
    const [active , setActive] = useState<string>("Description")
    const ProductDesc = () => {
        switch (active) {
            case "Description": return <span className="text-gray-500 text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rerum recusandae magnam id, dolore commodi magni esse perferendis veniam quisquam ipsa saepe officiis nesciunt iure facere sequi qui fugit impedit?</span>
            case "information": return <ProductInformation/>
            case "Reviews": return <ProductReviews/>
        }
    }
    const [count , setCount] = useState(0)
    return ( 
        <div className="sm:mt-32 flex flex-col gap-28">
            <div className="grid grid-flow-col gap-10">
                <div className="w-32 hidden sm:flex gap-7 flex-col">
                    <img className="w-32 h-32" src={product} alt="" />
                    <img className="w-32 h-32" src={product} alt="" />
                    <img className="w-32 h-32" src={product} alt="" />
                    <img className="w-32 h-32" src={product} alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-16">
                    <ProductSwiper imgs={[product,product1,product2,product3]}/>
                    <div className="flex flex-col gap-3 sm:justify-between">
                        <h1 className="text-xl sm:text-2xl">Lira Earrings</h1>
                        <span className="text-base sm:text-xl text-amber-700">$20.00</span>
                        <p className="text-base text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus consequatur nostrum ipsa nisi nobis minima tempore commodi aliquam, facilis eaque architecto dicta distinctio quidem saepe maiores debitis doloremque corrupti!</p>
                        <div className="hidden sm:flex">
                            {[1,2,3,4,5].map(i=><StarOutlinedIcon/>)}
                            <span className="text-gray-500 text-base">1 customer review</span>
                        </div>
                        <div className="flex gap-6">
                            <div className="hidden sm:flex h-14 items-center bg-slate-300 rounded-md" >
                                <Button onClick={()=>setCount(prev => prev-1)} sx={{color:"gray"}}>-</Button>
                                <Typography>{count}</Typography>
                                <Button onClick={()=>setCount(prev => prev+1)} sx={{color:"gray"}}>+</Button>
                            </div>
                            <Button href={ROUTES.Home} className="sm:!py-4 !px-12 !border-2" fullWidth variant="outlined" sx={{color:"black",":hover":{bgcolor:"white",borderColor:"gray"},borderColor:"black"}}>ADD TO CART</Button>
                        </div>
                        <div className="hidden sm:flex">
                            <IconButton className="!mr-10"><FavoriteBorderOutlinedIcon/></IconButton>
                            <IconButton><EmailOutlinedIcon/></IconButton>
                            <IconButton><FacebookIcon/></IconButton>
                            <IconButton><InstagramIcon/></IconButton>
                            <IconButton><TwitterIcon/></IconButton>
                        </div>
                        <div className="hidden sm:flex">SKU : <span className="text-gray-500 text-base">12</span></div>
                        <div className="hidden sm:flex">Categories : <span className="text-gray-500 text-base">Fashion, Style</span></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row items-start sm:gap-11 w-full border-b mb-10">
                    <Button onClick={()=>setActive("Description")} className={active==="Description" ? "!text-black" : "!text-gray-400"}>Description</Button>
                    <Button onClick={()=>setActive("information")} className={active==="information" ? "!text-black" : "!text-gray-400"}>Aditional information</Button>
                    <Button onClick={()=>setActive("Reviews")} className={active==="Reviews" ? "!text-black" : "!text-gray-400"}>Reviews</Button>
                </div>
                <div><ProductDesc/></div>
            </div>
            <SimilarProduct/>
        </div>
     );
}
 
export default ProductPage;
