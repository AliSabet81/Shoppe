import { Box, Button, Divider, Input } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { GetSingleBlogService } from "../../../api/services/blog";
const OneBlogScreen = () => {
  const params = useParams();
  console.log(params.id)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogInfo, setBlogInfo] = useState<any>();
  useMemo(async () => {
    const res = await GetSingleBlogService(params.id ?? "");
    setBlogInfo(res.data);
  }, [params.id]);
  useEffect(() => {
    if (blogInfo) {
        console.log(blogInfo);
    }
  }, [blogInfo]);
  if (!blogInfo) {
    return null
  }
   return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex max-w-2xl mx-auto flex-col gap-4">
        <h1 className="text-xl sm:text-4xl text-center font-medium">
        {blogInfo.title}
        </h1>
        <h3 className="text-xs sm:text-base text-center">
          by {blogInfo.author} - {blogInfo.date}
        </h3>
      </div>
      <img src={`http://localhost:3333${blogInfo.img}`} className="rounded-3xl max-h-500" alt="" />
      <div className="flex max-w-2xl mx-auto flex-col gap-12">
        <p className="text-xs sm:text-base">
        {blogInfo.desc}
        </p>
        <img src={`http://localhost:3333${blogInfo.img2}`} className="rounded-xl max-h-80" alt="" />
        <div className="flex flex-col gap-4">
          <h3 className="text-base sm:text-2xl">Top Trend</h3>
          <p className="text-xs sm:text-base">
          {blogInfo.description}
          </p>
          <ul className="ml-3 text-xs sm:text-base">
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
          </ul>
        </div>
        <Divider />
        <Box component={"form"} className="flex flex-col gap-8 sm:gap-12">
          <div>
            <h3 className="text-base sm:text-2xl mb-4">Leave a Reply</h3>
            <h4 className="text-xs sm:text-base">
              Your email address will not be published. Required fields are
              marked *
            </h4>
          </div>
          <Input
            className="py-2"
            fullWidth
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            placeholder="Enter your name*"
          />
          <Input
            className="py-2"
            fullWidth
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            placeholder="Enter your Email*"
          />
          <div>
            <Input
              className="py-2 mb-6"
              fullWidth
              id="standard-adornment-weight"
              aria-describedby="standard-weight-helper-text"
              placeholder="Enter your Website*"
            />
            <div>
              <input type="checkbox" name="" id="" />
              <span className="text-xs text-gray-400 ml-2">
                Save my name, email, and website in this browser for the next
                time I comment
              </span>
            </div>
          </div>
          <Input
            className="pb-14"
            fullWidth
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            placeholder="Your comment"
          />
          <Button
            className="!px-9 sm:!py-4 w-fit"
            type="submit"
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "black",
              ":hover": { bgcolor: "black" },
            }}>
            Post Comment
          </Button>
        </Box>
        <Divider />
        <div>
          <h3 className="text-base sm:text-2xl mb-4">Comments ()</h3>
        </div>
      </div>
    </div>
  );
};

export default OneBlogScreen;
