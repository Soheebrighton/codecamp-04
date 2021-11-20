import { useState } from "react"

export default Child2() {
    const [ count, setCount ] = useState(0)

    function onClickCounter( {
        setCounter(prev => prev +1 )
  
    }

    return  (<>
    <div>자식 2 {count}</div>
    <button onClick={onClickCounter}> 카운트 올리기</button>
  </>)
}