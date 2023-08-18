import { Link } from "react-router-dom";
import ProductCard from "../card/product";
import { useCallback, useEffect, useState } from "react";
import { GetProductsService } from "../../api/services/product";

const ShopTheLatest = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [productsList, setProductsList] = useState<any>([]);

  const fetchProductsList = useCallback(async () => {
    const res = await GetProductsService({ pageNumber: 1, pageSize: 3 });
    setProductsList(res.data);
  }, []);
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="flex justify-between">
        <h2 className="text-base sm:text-3xl font-medium">Shop The Latest</h2>
        <Link
          className="text-sm sm:text-xl text-yellow-500 font-medium"
          to={"/shop"}>
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-14 justify-items-center">
        {productsList.map((i: { _id: number; img: string; name: string; price: number; }) => (
          <ProductCard
            id={i._id}
            img={`http://localhost:3333${i.img}`}
            name={i.name}
            price={i.price}
            path={`/Shop/${i._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopTheLatest;
