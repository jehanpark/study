import React from "react";
import styled from "styled-components";
import PostlistItem from "./PostListItem";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const PostList = ({ posts, onClickItem }) => {
  console.log(posts);
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostlistItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
};
export default PostList;
