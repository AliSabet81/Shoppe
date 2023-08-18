import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useSearchParams } from "react-router-dom";
import { ROUTES } from "../../routes";

const BlogsScreen = () => {
  const [, setQueryParams] = useSearchParams();

  return (
    <div className="flex flex-col gap-10 sm:my-24 mt-10 mb-24 container">
      <h1 className="text-3xl font-medium">Blog</h1>
      <div className="flex flex-col-reverse sm:flex-row gap-9">
        <div className="w-80">
          <div className="hidden sm:block">
            <Input
              className="py-2 !border-slate-200"
              fullWidth
              onChange={(e) => {
                setTimeout(() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  setQueryParams((params: any) => {
                    params.set("searchWord", e.target.value);
                    return params;
                  });
                }, 1500);
              }}
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
          <div className="flex flex-col gap-3 mt-16">
            <h2 className="text-xl font-medium">Categories</h2>
            <Button
              href={`${ROUTES.Blog}/fashion`}
              className="!w-fit"
              sx={{ color: "gray" }}>
              Fashion
            </Button>
            <Button
              href={`${ROUTES.Blog}/style`}
              className="!w-fit"
              sx={{ color: "gray" }}>
              Style
            </Button>
            <Button
              href={`${ROUTES.Blog}/accessories`}
              className="!w-fit"
              sx={{ color: "gray" }}>
              Accessories
            </Button>
            <Button
              href={`${ROUTES.Blog}/season`}
              className="!w-fit"
              sx={{ color: "gray" }}>
              Season
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogsScreen;
