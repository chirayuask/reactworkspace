import React, {useState } from 'react'

const MatchGame = () => {
    const [data, setData] = useState([[1, 2, 3, 4], [6, 7, 8, 9], [1, 2, 6, 9], [3, 7, 8, 4]])
    const [dataVisibleArray, setDataVisibleArray] = useState(new Array(data.length).fill(new Array(data[0].length).fill(false)));
    const [previousSelectedPointer, setPreviousSelectedPointer] = useState({ rowIndex: null, colIndex: null })
    console.log('previousSelectedPointer', previousSelectedPointer)
    const [clicked, setClicked] = useState(true)
    const onClickItemHandler = (rowIndex, colIndex) => {
        if (clicked) {
            setDataVisibleArray(prevState => {
                const newState = [...prevState];
                newState[colIndex] = [...prevState[colIndex]];
                newState[colIndex][rowIndex] = true;
                return newState;
            });

            if (previousSelectedPointer.colIndex === null && previousSelectedPointer.rowIndex === null) {
                setPreviousSelectedPointer({ rowIndex: rowIndex, colIndex: colIndex })
            } else {
                if (data[previousSelectedPointer.colIndex][previousSelectedPointer.rowIndex] !== data[colIndex][rowIndex]) {
                    setClicked(false)
                    
                    setTimeout(() => {
                        console.log(colIndex, rowIndex);
                        setDataVisibleArray(prevState => {
                            const newState = [...prevState];
                            newState[previousSelectedPointer.colIndex][previousSelectedPointer.rowIndex] = false;
                            newState[colIndex][rowIndex] = false;
                            return newState;
                        });
                        setClicked(true)
                        console.log('previousSelectedPointer', previousSelectedPointer)
                    }, 2000);
                }
                setPreviousSelectedPointer({ rowIndex: null, colIndex: null })
            }

        }
    };
    return (
        <div>
            <div className='matchgame'>
                {

                    data.map((rowItem, rowIndex) => (
                        <div key={rowIndex} className='column'>
                            {
                                rowItem.map((colItem, colIndex) => (
                                    <div key={colIndex} className='card' onClick={() => onClickItemHandler(rowIndex, colIndex)}>{dataVisibleArray[colIndex][rowIndex] ? data[colIndex][rowIndex] : ""}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MatchGame