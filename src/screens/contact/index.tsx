import { Box, Button, Input } from "@mui/material";

const ContactScreen = () => {
    return ( 
        <div className="max-w-4xl flex flex-col gap-10 mx-auto my-32">
            <h1 className="text-3xl text-center font-medium">Contact Us</h1>
            <p className="max-w-xl m-auto text-xl text-center">Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
            <Box className="flex mt-11 flex-col gap-24 justify-center" component={"form"}>
                <div className="grid grid-cols-2 gap-24">
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Last Name"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Email"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
                </div>
                <Input className="py-3 pb-8" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Message"/>
                <Button className="!mt-10 !py-4 max-w-lg" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Send</Button>
            </Box>
        </div>
     );
}
 
export default ContactScreen;