import { Box, Button, IconButton, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../../components/card/product";
import { GetProductsService } from "../../api/services/product";
import { useCallback, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const ShopScreen = () => {
  const [productsList, setProductsList] = useState<[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [searchWord, setSearchWord] = useState("");
  const fetchProductsList = useCallback(async () => {
    const res = await GetProductsService({pageNumber,pageSize:6,searchWord});
    setProductsList(res.data);
  }, [pageNumber, searchWord]);
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);
  console.log(productsList);
  return (
    <div className="flex flex-col gap-10 my-6 sm:my-24 container">
      <h1 className="text-xl sm:text-3xl font-medium">Shop The Latest</h1>
      <div className="flex gap-9">
        <div className="w-80 hidden sm:block">
          <Input
            onChange={(e) => {
              setTimeout(() => {
                setSearchWord(e.target.value);
              }, 1500);
            }}
            className=" py-2 !border-slate-200"
            fullWidth
            id="standard-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="standard-weight-helper-text"
            placeholder="ُsearch..."
          />
        </div>
        <div>
          <Box
            sx={{ height: "900px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              
            {productsList.map((i: any) => (
              <ProductCard
                id={i._id}
                img={`http://localhost:3333${i.img}`}
                name={i.name}
                price={i.price}
                path={`/Shop/${i._id}`}
              />
            ))}
          </Box>
          <div className="w-1/2 flex mt-10 m-auto justify-between">
            <Button
              disabled={pageNumber == 1}
              onClick={() => setPageNumber((i) => i - 1)}>
              <ArrowBackIosNewIcon />
            </Button>
            <Button
              disabled={pageNumber == 2}
              onClick={() => setPageNumber((i) => i + 1)}>
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
