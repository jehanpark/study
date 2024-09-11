import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: calc(100% - 32px);
border: 1px solid grey;
border-radius: 8px;
padding: 10px 16px;
cursor: pointer;
transition: all 0.3s;
&:hover{
background: lightgrey;
}
`

const CommentListItem = ({comment}) => {

  return (
    <Wrapper>
      {comment}
    </Wrapper>
  )
}

export default CommentListItem
