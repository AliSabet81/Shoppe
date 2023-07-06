import ProductSwiper from "../../components/productSwiper";
import homeSlider from "../../../public/homeSlide.png";
import { Box, Button, ButtonGroup, Divider, IconButton, Typography } from "@mui/material";
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
        <div className="mt-32 flex flex-col gap-28">
            <div className="grid grid-flow-col gap-10">
                <div className="w-32 flex gap-7 flex-col">
                    <img className="w-32 h-32" src={homeSlider} alt="" />
                    <img className="w-32 h-32" src={homeSlider} alt="" />
                    <img className="w-32 h-32" src={homeSlider} alt="" />
                    <img className="w-32 h-32" src={homeSlider} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-16">
                    <ProductSwiper imgs={[homeSlider,homeSlider,homeSlider,homeSlider]}/>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-2xl">Lira Earrings</h1>
                        <span className="text-xl text-amber-700">$20.00</span>
                        <p className="text-base text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus consequatur nostrum ipsa nisi nobis minima tempore commodi aliquam, facilis eaque architecto dicta distinctio quidem saepe maiores debitis doloremque corrupti!</p>
                        <div className="flex">
                            {[1,2,3,4,5].map(i=><StarOutlinedIcon/>)}
                            <span className="text-gray-500 text-base">1 customer review</span>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex h-14 items-center bg-slate-300 rounded-md" >
                                <Button onClick={()=>setCount(prev => prev-1)} sx={{color:"gray"}}>-</Button>
                                <Typography>{count}</Typography>
                                <Button onClick={()=>setCount(prev => prev+1)} sx={{color:"gray"}}>+</Button>
                            </div>
                            <Button href={ROUTES.Home} className="!py-4 !px-12 !border-2" fullWidth variant="outlined" sx={{color:"black",":hover":{bgcolor:"white",borderColor:"gray"},borderColor:"black"}}>ADD TO CART</Button>
                        </div>
                        <div>
                            <IconButton className="!mr-10"><FavoriteBorderOutlinedIcon/></IconButton>
                            <IconButton><EmailOutlinedIcon/></IconButton>
                            <IconButton><FacebookIcon/></IconButton>
                            <IconButton><InstagramIcon/></IconButton>
                            <IconButton><TwitterIcon/></IconButton>
                        </div>
                        <div>SKU : <span className="text-gray-500 text-base">12</span></div>
                        <div>Categories : <span className="text-gray-500 text-base">Fashion, Style</span></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-11 w-full border-b mb-10">
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


    // return ( 
    //     <div className="flex flex-col gap-16 mt-24 items-center">
    //         <h1 className="text-4xl font-medium">My Account</h1>
    //         <div className='flex gap-11 w-full border-b'>
    //             <Button onClick={()=>setActive("Dashboard")} className={active==="Dashboard" ? "!text-black" : "!text-gray-400"}>Dashboard</Button>
    //             <Button onClick={()=>setActive("Orders")} className={active==="Orders" ? "!text-black" : "!text-gray-400"}>Orders</Button>
    //             <Button onClick={()=>setActive("Downloads")} className={active==="Downloads" ? "!text-black" : "!text-gray-400"}>Downloads</Button>
    //             <Button onClick={()=>setActive("Addresses")} className={active==="Addresses" ? "!text-black" : "!text-gray-400"}>Addresses</Button>
    //             <Button onClick={()=>setActive("Details")} className={active==="Details" ? "!text-black" : "!text-gray-400"}>Account details</Button>
    //             <Button onClick={()=>setActive("Logout")} className={active==="Logout" ? "!text-black" : "!text-gray-400"}>Logout</Button>
    //         </div>
    //         <div className="w-full"><Account/></div>
    //     </div>
    //  );
