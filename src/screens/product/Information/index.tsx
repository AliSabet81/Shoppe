import { useMemo, useState } from "react";
import { GetSingleProductService } from "../../../api/services/product";

const ProductInformation = ({id}: {id:string}) => {
  const [productInfo, setProductInfo] = useState<any>();
  useMemo(async () => {
    const res = await GetSingleProductService(id);
    setProductInfo(res);
  }, []);
  return (
    <div className="text-base flex flex-col gap-4">
      <h2>
        Weight : <span className="text-gray-500">{productInfo ? productInfo.data.weight :'0.3 kg'}</span>
      </h2>
      <h2>
        Dimentions : <span className="text-gray-500">{productInfo ? productInfo.data.dimentions :'15 x 10 x 1'} cm</span>
      </h2>
      <h2>
        Colors : <span className="text-gray-500">{productInfo ? productInfo.data.colors :'Black, Browns, White'}</span>
      </h2>
      <h2>
        Material : <span className="text-gray-500">{productInfo ? productInfo.data.material :'Metal'}</span>
      </h2>
    </div>
  );
};

export default ProductInformation;
