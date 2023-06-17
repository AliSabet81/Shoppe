import { Button } from "@mui/material";
import { useState } from "react";
import AddNewBil from "./addNewBill";

const Addresses = () => {
    const [addNewBil , setAddNewBil] = useState(false)
    const [addNewShip , setAddNewShip] = useState(false)
    return ( 
        <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-5">
                <h1 className="text-xl">Billing address</h1>
                {addNewBil ? <AddNewBil/> : <><Button sx={{color:"goldenrod"}} onClick={()=>setAddNewBil(true)} className="w-fit">ADD</Button><h3 className="text-sm">You have not set up this type of address yet.</h3></>}
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-xl">Shipping address</h1>
                {addNewShip ? <AddNewBil/> : <><Button sx={{color:"goldenrod"}} onClick={()=>setAddNewShip(true)} className="w-fit">ADD</Button><h3 className="text-sm">You have not set up this type of address yet.</h3></>}
            </div>
        </div>
     );
}
 
export default Addresses;