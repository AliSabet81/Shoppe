import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="mt-52 border-t pt-14 flex flex-col gap-12">
            <div className="flex justify-between">
                <div className="flex gap-10">
                    <Button href={ROUTES.Contact} size="small" sx={{color:"gray"}}>CONTACT</Button>
                    <Button size="small" sx={{color:"gray"}}>TERMS OF SERVICES</Button>
                    <Button size="small" sx={{color:"gray"}}>SHIPPING AND RETURNS</Button>
                </div>
                <div className="w-96">
                <Input fullWidth id="standard-adornment-weight" 
                endAdornment={<InputAdornment position="end"><IconButton><ArrowRightAltOutlinedIcon/></IconButton></InputAdornment>}
                aria-describedby="standard-weight-helper-text" placeholder="Give an email, get the newsletter."/>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 text-base">
                    <span>© 2021 Shelly. </span>
                    <span className="text-gray-500"> Terms of use </span>
                    <span> and </span>
                    <Link to={ROUTES.PrivacyPolicy} className="text-gray-500"> privacy policy.</Link>
                </div>
                <div>
                    <IconButton><LinkedInIcon/></IconButton>
                    <IconButton><FacebookIcon/></IconButton>
                    <IconButton><InstagramIcon/></IconButton>
                    <IconButton><TwitterIcon/></IconButton>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;