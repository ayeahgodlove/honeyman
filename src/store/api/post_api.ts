import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IPost } from "@model/post";

interface ISort {
  searchTitle: string;
  sortBy?: "date" | "title" | "author";
}

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getSinglePost: build.query<IPost, string>({
      query: (postId) => `/posts/${postId}`,
    }),
    getSinglePostBySlug: build.query<IPost, string>({
      query: (slug) => `/posts/slugs/${slug}`,
    }),
    fetchAllPosts: build.query<IPost[], number | ISort>({
      query: (page = 1) => `/posts?page=${page}`,
      // query: ({ searchTitle, sortBy, }) => {
      //   let queryString = `posts?q=${searchTitle}`;
      //   if (sortBy === "date") {
      //     queryString += "&_sort=date&_order=desc";
      //   } else if (sortBy === "title") {
      //     queryString += "&_sort=title&_order=asc";
      //   } else if (sortBy === "author") {
      //     queryString += "&_sort=author&_order=desc";
      //   }
       
      //   return queryString;
      // }, 
      providesTags: (result) => ["Post"],
    }),
  }),
});
