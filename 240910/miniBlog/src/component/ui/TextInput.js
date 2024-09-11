import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
width: calc(100% - 32px);
${({height}) => height && `height: ${height}px`};
font-size: 16px;
padding: 16px;
line-height: 20px;
`

const TextInput = ({height}) => {
  return (
    <StyledTextarea height={height}>
    </StyledTextarea>
  )
}

export default TextInput
