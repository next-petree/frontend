import React, { FC } from 'react';
import PostBoard from '../../component/PostBoard';
import Content from '../Layout/content';

const PostBoardPage: FC = () => {
  return (
    <>
      <Content title='포스트 페이지'>
        <PostBoard />
      </Content>
    </>
  );
};

export default PostBoardPage;
