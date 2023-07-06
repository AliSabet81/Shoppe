import { CardContent, Typography, CardActions, Button, Rating } from "@mui/material";
import React from "react";

const ReviewCard = () => {
    return ( 
        <div>
            <div className="flex items-center gap-4 mb-4">
            <h3 className="text-xl">Scarlet withch</h3><span className="text-sm text-gray-500">6 May, 2020</span>
            </div>
            <Rating name="read-only" value={3} readOnly />
            <p className="text-base mt-6 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro corporis quo quos necessitatibus harum inventore possimus vel, similique voluptate eum, distinctio praesentium sequi voluptates in ipsum? Natus, ratione quidem!</p>
        </div>
     );
}
 
export default ReviewCard;