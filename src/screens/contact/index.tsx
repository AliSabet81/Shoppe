import { Box, Button, Input } from "@mui/material";

const ContactScreen = () => {
    return ( 
        <div className="max-w-4xl flex flex-col sm:gap-10 mx-auto mt-10 mb-24 sm:my-32">
            <h1 className="text-3xl sm:text-center font-medium">Contact Us</h1>
            <p className="max-w-xl m-auto hidden sm:block text-xl text-center">Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
            <Box className="flex mt-11 flex-col sm:gap-24 gap-10 justify-center" component={"form"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-24 gap-10">
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Last Name"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Email"/>
                    <Input className="py-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
                </div>
                <Input className="py-3 pb-12" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Message"/>
                <Button className="!mt-10 self-center sm:!py-4 max-w-lg" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Send</Button>
            </Box>
        </div>
     );
}
 
export default ContactScreen;