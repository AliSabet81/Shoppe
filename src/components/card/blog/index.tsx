import { Link } from "react-router-dom";
import { IBlogCard } from "../../../routes/blogs";



const BlogCard = (i:IBlogCard) => {
    return ( 
        <div className="w-full flex flex-col gap-6">
            <img src={i.img} alt="" />
            <div className="flex flex-col gap-4">
                <div className="font-normal text-base"><span>{i.category}</span> - <span>{i.date}</span></div>
                <h4 className="font-normal text-xl">{i.title}</h4>
                <h5 className="font-normal text-base">{i.desc}</h5>
            </div>
            <Link to={i.path}>Read More</Link>
        </div>
     );
}
 
export default BlogCard;