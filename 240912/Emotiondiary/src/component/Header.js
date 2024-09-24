import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
display: flex;
aling-items: center;
padding: 20px 0;
border-bottom: 1px solid #e2e2e2;
justify-content: space-between;
`

const LeftChild = styled.div`
`
const Title = styled.div`
font-size: 25px;
`
const RightChlid = styled.div`
`

const Header = ({title,leftChlid,rightChlid}) => {
  return (
    <Wrap>
      <LeftChild>{leftChlid}</LeftChild>
      <Title>{title}</Title>
      <RightChlid>{rightChlid}</RightChlid>
    </Wrap>
  )
}

export default Header
