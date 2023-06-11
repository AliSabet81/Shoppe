import { Link } from "react-router-dom";

interface ISliderCard {
    src:string,
    name:string,
    price:number,
    path:string
}

const HomeSliderCard = (i:ISliderCard) => {
    return ( 
        <div className="relative flex items-center container" style={{ height: "646px"}}>
            <img className="mx-auto absolute top-0 -z-10 rounded-2xl " src={i.src} alt="react logo" style={{  height: "646px",width:"100%"}}/>
            <div className="flex flex-col gap-12 px-10 text-white w-96">
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-3xl">{i.name}</h3>
                    <h4 className="font-normal text-2xl">{i.price}</h4>
                </div>
                <Link className="font-semibold rounded-md w-48 text-lg px-7 py-4 border-2" to={i.path}>VIEW PRODUCT</Link>
            </div>
        </div>
     );
}
 
export default HomeSliderCard;