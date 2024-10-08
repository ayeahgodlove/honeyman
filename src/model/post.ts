import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IPost {
  id: string; //primary key
  title: string;
  content: string;
  summary: string;
  imageUrl: string;
  slug: string;
  publishedAt: Date;
  authorId: string; //foreign key to user table
  categoryId: string; //foreign key to user table
  tags: string[];
  readTime: string;
}

export const emptyPost: IPost = {
  id: "",
  slug: "",
  title: "",
  content: "",
  imageUrl: "",
  publishedAt: new Date(),
  authorId: "",
  categoryId: "",
  tags: [],
  summary: "",
  readTime: "",
};

export interface IPostState extends IBaseState {
  readonly posts: IPost[];
  readonly post: IPost;
}

export interface IPostResponse extends IResponseBase {
  data: IPost;
}

export interface IPostResponses extends IResponseBase {
  data: IPost[];
}
