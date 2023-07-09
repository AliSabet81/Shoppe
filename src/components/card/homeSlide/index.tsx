import { Link } from "react-router-dom";

interface ISliderCard {
    src:string,
    name:string,
    price:number,
    path:string
}
import "../../../index.css"
const HomeSliderCard = (i:ISliderCard) => {
    return ( 
        <div className="relative flex h-homeslide py-8 items-end sm:items-center container">
            <img className="mx-auto absolute h-homeslide top-0 -z-10 rounded-2xl " src={i.src} alt="react logo" style={{ width:"100%"}}/>
            <div className="flex flex-col gap-4 sm:gap-12 px-2 sm:px-10 text-white w-96">
                <div className="flex flex-col gap-1 sm:gap-4">
                    <h3 className="font-medium text-xl sm:text-3xl">{i.name}</h3>
                    <h4 className="font-normal text-sm sm:text-2xl">{i.price}</h4>
                </div>
                <Link className="font-semibold rounded-md w-28 sm:w-48 text-xs sm:text-lg sm:px-7 py-1.5 px-2 sm:py-4 border-2" to={i.path}>VIEW PRODUCT</Link>
            </div>
        </div>
     );
}
 
export default HomeSliderCard;