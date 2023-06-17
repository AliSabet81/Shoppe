import { Box, Button, Input } from "@mui/material";

const AddNewBil = () => {
    return ( 
        <Box component={"form"} className="flex flex-col gap-9">
            <div className="grid grid-cols-2 gap-10">
                <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="First name *"/>
                <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                    aria-describedby="standard-weight-helper-text" placeholder="Last name *"/>
            </div>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Company Name"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Country *"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Postcode / ZIP *"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Street Address *"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Town / City * *"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Phone *"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Email *"/>
            <Button className="!px-16 !py-4 !w-fit" type="submit" variant="contained" sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>SAVE ADDRESS</Button>
        </Box>
     );
}
 
export default AddNewBil;