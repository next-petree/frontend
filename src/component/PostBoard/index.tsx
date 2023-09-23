import * as S from "./style";
import { usePost } from "hooks";

const PostBoard = () => {
  const { postId, post, posts, setPostId } = usePost();

  const AllPosts = () => {
    return (
      <>
        {posts?.map((post) => {
          return (
            <div key={post.id}>
              {post.id}, <b>{post.title}</b>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <S.PostBox>
        <h3>{post?.id}번째 포스트 </h3>
        <div>{post?.title}</div>
        <button onClick={() => setPostId(postId + 1)}>up</button>
      </S.PostBox>

      <S.PostBox>
        <h3>모든 포스트</h3>
        <AllPosts />
      </S.PostBox>
    </>
  );
};

export default PostBoard;
