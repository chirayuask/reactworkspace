import React, { useState } from 'react'

const Sudoku = () => {
  const [sets, setSets] = useState([]);
  const [stack, setStacks] = useState([]);

  const onClickEvent = (e) => {
    const { clientX, clientY } = e;
    let newArray = [...sets, { x: clientX, y: clientY }]
    setSets(newArray);
  }
  const onClickUndoButton = () => {
    let lastArray = [...sets];
    let last = lastArray.pop();
    let stackArray = [...stack];
    if (last) stackArray.push(last);
    setSets(lastArray);
    setStacks(stackArray);
  }
  const onClickRedoButton = () => {
    let newArray = [...stack];
    let last = newArray.pop()
    let newSets = [...sets];
    if (!last) return
    newSets.push(last);
    setStacks(newArray)
    setSets(newSets);
  }
  return (
    <>
      <button disabled={sets.length === 0} onClick={onClickUndoButton}>UNDO</button>
      <button disabled={stack.length === 0} onClick={onClickRedoButton}>REDO</button>
      <div className='sudoku' onClick={onClickEvent}>
        {sets.map((set, index) => (
          <div key={index} style={{
            left: set.x - 6 + "px", top: set.y - 6 + "px"
          }} className='set'>
            O
          </div>
        ))}
      </div>
    </>
  )
}

export default Sudoku