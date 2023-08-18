import { instance } from "../../constant";

interface ISearchAndFilter {
  pageNumber?: number;
  pageSize?: number;
  searchWord?: string;
}

export const searchAndFilterQuery = (
  searchAndFilterProps: ISearchAndFilter
) => {
  const { pageNumber, pageSize, searchWord } = searchAndFilterProps;
  if (searchWord) {
    return {
      pageNumber: pageNumber,
      pageSize: pageSize,
      searchWord: searchWord,
    };
  }
  return {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };
};

export const GetProductsService = async (
  searchAndFilterProps: ISearchAndFilter
) => {
  const queries = searchAndFilterQuery(searchAndFilterProps);
  const res = await instance.get(`/products`, { params: { ...queries } });
  return res.data;
};

export const GetSingleProductService = async (id: string): Promise<any> => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};
