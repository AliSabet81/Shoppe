import { Box, Button, Divider, Input } from "@mui/material";
import blog1 from "/public/blog01.png"
import blog4 from "/public/blog04.png"
const OneBlogScreen = () => {
    return ( 
        <div className="flex flex-col gap-12 w-full">
            <div className="flex max-w-2xl mx-auto flex-col gap-4">
                <h1 className="text-xl sm:text-4xl text-center font-medium">Fast Fashion, And Faster Fashion</h1>
                <h3 className="text-xs sm:text-base text-center">by ANNY JOHNSON - October 8,2020</h3>
            </div>
            <img src={blog1} className="max-h-500" alt="" />
            <div className="flex max-w-2xl mx-auto flex-col gap-12">
                <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
                <img src={blog4} className="max-h-80" alt="" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-base sm:text-2xl">Top Trend</h3>
                    <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.</p>
                    <ul className="ml-3 text-xs sm:text-base">
                        <li>● consectetur adipiscing elit. Aliquam placerat</li>
                        <li>● consectetur adipiscing elit. Aliquam placerat</li>
                        <li>● consectetur adipiscing elit. Aliquam placerat</li>
                        <li>● consectetur adipiscing elit. Aliquam placerat</li>
                    </ul>
                </div>
                <Divider/>
                <Box component={"form"} className="flex flex-col gap-8 sm:gap-12">
                    <div>
                        <h3 className="text-base sm:text-2xl mb-4">Leave a Reply</h3>
                        <h4 className="text-xs sm:text-base">Your email address will not be published. Required fields are marked *</h4>
                    </div>
                    <Input className="py-2" fullWidth id="standard-adornment-weight" 
                        aria-describedby="standard-weight-helper-text" placeholder="Enter your name*"/>
                    <Input className="py-2" fullWidth id="standard-adornment-weight" 
                        aria-describedby="standard-weight-helper-text" placeholder="Enter your Email*"/>
                    <div>
                        <Input className="py-2 mb-6" fullWidth id="standard-adornment-weight" 
                            aria-describedby="standard-weight-helper-text" placeholder="Enter your Website*"/>
                        <div>
                            <input type="checkbox" name="" id="" /><span className="text-xs text-gray-400 ml-2">Save my name, email, and website in this browser for the next time I comment</span>
                        </div>
                    </div>
                    <Input className="pb-14" fullWidth id="standard-adornment-weight" 
                        aria-describedby="standard-weight-helper-text" placeholder="Your comment"/>
                    <Button className="!px-9 sm:!py-4 w-fit" type="submit" variant="contained" sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Post Comment</Button>
                </Box>
                <Divider/>
                <div>
                    <h3 className="text-base sm:text-2xl mb-4">Comments ()</h3>
                </div>
            </div>
        </div>
     );
}
 
export default OneBlogScreen;