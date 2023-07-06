import { Button, Input, Rating, TextField } from "@mui/material";
import { useState } from "react";
import ReviewCard from "../../../components/card/review";

const ProductReviews = () => {
    const [rate , setRate] = useState<number | null>(0)
    console.log(rate);
    
    return ( 
        <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-16">
                <h2 className="text-xl">2 Reviews for lira earings</h2>
                <ReviewCard/>
                <ReviewCard/>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl">Add a Review</h2>
                    <p className="text-xs text-gray-500">Your email address will not be published. Required fields are marked *</p>
                </div>
                <Input className="py-3 pb-8" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Message"/>
                <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
                <div className="flex flex-col gap-6">
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                        aria-describedby="standard-weight-helper-text" placeholder="Last Name"/>
                    <div>
                        <input type="checkbox" name="" id="" /> <span className="text-xs text-gray-500">Save my name, email, and website in this browser for the next time I comment</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xs text-gray-500">Your Rating*</span>
                    <Rating
                      name="simple-controlled"
                      value={rate}
                      onChange={(event, newValue) => {
                        setRate(newValue);
                      }}
                    />
                </div>
                <Button className="!px-9 !py-4 w-32" type="submit" variant="contained" sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Submit</Button>
            </div>
        </div>
     );
}
 
export default ProductReviews;