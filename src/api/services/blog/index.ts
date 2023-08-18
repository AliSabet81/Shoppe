import { instance } from "../../constant";

interface ISearchAndFilter {
  pageNumber?: number;
  pageSize?: number;
  searchWord?: string;
  category?: string;
}

export const searchAndFilterQuery = (
  searchAndFilterProps: ISearchAndFilter
) => {
  const { pageNumber, pageSize, searchWord, category } = searchAndFilterProps;
  const queries = {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };
  if (category && searchWord) {
    return { ...queries, searchWord: searchWord, category: category };
  }
  if (searchWord) {
    return { ...queries, searchWord: searchWord };
  }
  if (category) {
    return { ...queries, category: category };
  }
  return queries;
};

export const GetBlogsService = async (
  searchAndFilterProps: ISearchAndFilter
) => {
  const queries = searchAndFilterQuery(searchAndFilterProps);
  const res = await instance.get(`/blogs`, { params: { ...queries } });
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetSingleBlogService = async (id: string): Promise<any> => {
  const res = await instance.get(`/blogs/${id}`);
  return res.data;
};
