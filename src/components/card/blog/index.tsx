import { Link } from "react-router-dom";
import { IBlogCard } from "../../../types";



const BlogCard = (i:IBlogCard) => {
    return ( 
        <div className="w-full flex flex-col gap-4 sm:gap-6">
            <img className="max-h-300 max-w-md rounded-xl" src={i.img} alt="" />
            <div className="flex flex-col gap-2 sm:gap-4">
                <div className="font-normal text-gray-500 text-xs sm:text-base"><span>{i.category}</span> - <span>{i.date}</span></div>
                <h4 className="font-normal text-base sm:text-xl">{i.title}</h4>
                <h5 className="font-normal text-xs sm:text-base max-h-12 max-w-md overflow-hidden">{i.desc}</h5>
            </div>
            <Link className="text-yellow-800" to={i._id}>Read More</Link>
        </div>
     );
}
 
export default BlogCard;