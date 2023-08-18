import { useParams, useSearchParams } from "react-router-dom";
import BlogCard from "../../../components/card/blog";
import { useCallback, useEffect, useState } from "react";
import { GetBlogsService } from "../../../api/services/blog";
import { IBlogCard } from "../../../types";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Blog = () => {
  const params = useParams();
  console.log(params.category);
  const [blogsList, setBlogsList] = useState<IBlogCard[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [queryParams] = useSearchParams();
  const fetchProductsList = useCallback(async () => {
    const res = await GetBlogsService({
      pageNumber,
      pageSize: 4,
      searchWord: queryParams.get("searchWord") ?? "",
      category: params.category,
    });
    setBlogsList(res.data);
  }, [pageNumber, params.category, queryParams]);
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
        {blogsList.map((i) => (
          <BlogCard
            img={`http://localhost:3333${i.img}`}
            category={i.category}
            date={i.date}
            title={i.title}
            desc={i.desc}
            _id={i._id}
          />
        ))}
      </div>
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
  );
};

export default Blog;
