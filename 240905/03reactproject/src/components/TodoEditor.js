import React from 'react'

const TodoEditor = () => {
  return (
    <div className='TodoEditor'>
     <div>새로운 Todo 작성하기✒️</div>
<div className='editor_Wrapper'>
       <input placeholder='새로운 TodoEditor'/>
       <button>추가</button>
</div>
    </div>
  )
}

export default TodoEditor
