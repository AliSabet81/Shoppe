import { Product } from "../../routes/product";
import ProductCard from "../card/product";

const SimilarProduct = () => {
    return ( 
        <div>
            <h1 className="text-2xl mb-12">Similar Items</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
                {Product.filter(i=> i.index < 3).map((i)=> <ProductCard key={i.name} img={i.img} name={i.name} price={i.price} index={0} path={i.path} id={i.id}/>)}
            </div>
        </div>
     );
}
 
export default SimilarProduct;