import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { PostService } from "../services/post.service";
import { useTag } from "./tag.hook";
import { RootState } from "@store/store";
import { IPost } from "@model/post";
import { addPostSuccess, editPostSuccess, fetchPostsAsync, setActivePost } from "@store/slice/post.slice";

const usePost = () => {
  const posts = useSelector<RootState, IPost[]>((state) => state.post.posts);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.post.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.post.initialFetch
  );
  const post = useSelector<RootState, IPost>((state) => state.post.post);

  const dispatch = useDispatch();

  const loadPosts = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchPostsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addPost = async (post: IPost) => {
    return await PostService.create(post)
      .then((postResponse) => {
        dispatch(addPostSuccess(postResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const setPost = (post: IPost) => {
    dispatch(setActivePost(post));
  };

  const editPost = async (post: IPost) => {
    return await PostService.update(post)
      .then((postResponse) => {
        dispatch(editPostSuccess(postResponse.data));
        setPost(postResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const {tags} = useTag()
  const getPostTags = (post: IPost): string[] => {
    return post.tags.map((tagId) => {
      const matchingTag = tags.find((tag) => tag.id === tagId);
      return matchingTag ? matchingTag.name : "Unknown Tag"; // Handle missing tags
    });
  };

  const postCounts = posts.length;

  useEffect(() => {
    // loadPosts();
  }, [post, posts, isLoading, initialFetch]);

  return {
    post,
    posts,
    isLoading,
    initialFetch,
    addPost,
    editPost,
    setPost,
    getPostTags,
    postCounts
  };
};

export { usePost };
