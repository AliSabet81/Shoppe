import { Link } from "react-router-dom";
import { Product } from "../../routes/product";
import ProductCard from "../card/product";
// import { Product } from "../../routes/product";
// import ProductCard from "../../components/card/product";

const ShopTheLatest = () => {
    return ( 
        <div className="container mx-auto flex flex-col gap-10">
            <div className="flex justify-between">
                <h2 className="text-3xl font-medium">Shop The Latest</h2>
                <Link className="text-xl text-yellow-500 font-medium" to={"/shop"}>View All</Link>
            </div>
            <div className="grid grid-cols-3 gap-14 justify-items-center">
                {Product.map((i)=> <ProductCard key={i.index} img={i.img} name={i.name} price={i.price}/>)}
            </div>
        </div>
     );
}
 
export default ShopTheLatest;