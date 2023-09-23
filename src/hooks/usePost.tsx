import { useEffect, useState } from "react";
import { fetchPostById, fetchAllPosts } from "@api/services";
import { Post } from "types/post";

const usePost = () => {
  const [postId, setPostId] = useState<number>(1);
  const [post, setPost] = useState<Post>();
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    fetchAllPosts().then((res) => setPosts(res.data));
  }, []);

  useEffect(() => {
    fetchPostById(postId).then((res) => setPost(res.data));
  }, [postId]);

  return {
    postId,
    post,
    posts,
    setPostId,
    setPost,
    setPosts,
  };
};

export default usePost;
