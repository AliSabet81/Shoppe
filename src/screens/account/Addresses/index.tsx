import { Button } from "@mui/material";
import { useState } from "react";
import AddNewBil from "./addNewBill";

const Addresses = () => {
    const [addNewBil , setAddNewBil] = useState(false)
    const [addNewShip , setAddNewShip] = useState(false)
    return ( 
        <div>
            <h3 className="text-xs sm:text-base mb-11">The following addresses will be used on the checkout page by default.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                <div className="flex flex-col gap-5">
                    <h1 className="text-base sm:text-xl">Billing address</h1>
                    {addNewBil ? <AddNewBil/> : <><Button sx={{color:"goldenrod"}} onClick={()=>setAddNewBil(true)} className="!text-xs w-fit sm:!text-base">ADD</Button><h3 className="text-xs sm:text-sm">You have not set up this type of address yet.</h3></>}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-base sm:text-xl">Shipping address</h1>
                    {addNewShip ? <AddNewBil/> : <><Button sx={{color:"goldenrod"}} onClick={()=>setAddNewShip(true)} className="!text-xs w-fit sm:!text-base">ADD</Button><h3 className="text-xs sm:text-sm">You have not set up this type of address yet.</h3></>}
                </div>
            </div>
        </div>
     );
}
 
export default Addresses;