import React, { useState } from 'react'
import './DataSlider.css';
import boxesData from '../../Constants/DataSlider';

const DataSlider = () => {
    const [listone, setListOne] = useState(boxesData.leftBoxData);

    const [listtwo, setListtwo] = useState(boxesData.rightBoxData)
    const [selectedOneStack, SetSelectedOneStack] = useState(new Set());
    const [selectedTwoStack, SetSelectedTwoStack] = useState(new Set());
    const onClickCheckbox = (checked, id, boxname) => {
        if (boxname === 'boxone') {
            let refSelectedOneStack = new Set(selectedOneStack)
            if (checked) {
                refSelectedOneStack.add(id);
            } else {
                refSelectedOneStack.delete(`${id}`);
            }
            SetSelectedOneStack(refSelectedOneStack);
        } else {
            let refSelectedTwoStack = new Set(selectedTwoStack);
            if (checked) {
                refSelectedTwoStack.add(id);
            } else {
                refSelectedTwoStack.delete(`${id}`);
            }
            SetSelectedTwoStack(refSelectedTwoStack);
        };
    }

    const onClickArrow = (type) => {
        if (type === 'RightArrow') {
            let refListTwo = [...listtwo];
            const filteredListOne = listone.filter(item => {
                let itemVal = ![...selectedOneStack].some((selectedItem) => {
                    return selectedItem === item.id
                });
                if (!itemVal) refListTwo.push(item);
                return itemVal
            });
            setListOne(filteredListOne);
            SetSelectedOneStack(new Set());
            setListtwo(refListTwo);
        } else {
            let refListOne = [...listone];
            const filteredListTwo = listtwo.filter(item => {
                let itemVal =  ![...selectedTwoStack].some((selectedItem) => {
                    return selectedItem === item.id
                });
                if (!itemVal) refListOne.push(item);
                return itemVal
            });
            setListtwo(filteredListTwo);
            SetSelectedTwoStack(new Set());
            setListOne(refListOne);
        }
    }


    return (
        <div className="container">
            <div className="box" id='box1'>
                <ul>
                    {
                        listone.map((item, idx) => (
                            <li>
                                <input key={item.id} type='checkbox' onClick={(event) => { onClickCheckbox(event.target.checked, item.id, 'boxone') }} />{item.value}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <button onClick={() => { onClickArrow('RightArrow') }} disabled={selectedOneStack.size === 0} style={{ cursor: selectedTwoStack.size === 0 ? 'context-menu' : 'pointer' }} className='button'>
                    <div className="arrow" id="leftArrow">&rarr;</div>
                </button>

                <button onClick={() => { onClickArrow('') }} disabled={selectedTwoStack.size === 0} style={{ cursor: selectedTwoStack.size === 0 ? 'context-menu' : 'pointer' }} className='button'>
                    <div className="arrow" id="rightArrow">&larr;</div>
                </button>
            </div>


            <div className="box">
                <ul>
                    {
                        listtwo.map((item, idx) => (
                            <div>
                                <li>
                                    <input key={item.id} type='checkbox' onClick={(event) => { onClickCheckbox(event.target.checked, item.id, 'boxtwo') }} />{item.value}
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default DataSlider