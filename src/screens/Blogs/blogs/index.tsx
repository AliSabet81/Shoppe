import BlogCard from "../../../components/card/blog";
import { Blogs } from "../../../routes/blogs";

const Blog = () => {
    return ( 
        <div className="grid grid-cols-2 gap-10 justify-items-center">
            {Blogs.map((i)=> <BlogCard img={i.img} category={i.category} date={i.date} title={i.title} desc={i.desc} path={i.path}/> )}
        </div>
     );
}
 
export default Blog;