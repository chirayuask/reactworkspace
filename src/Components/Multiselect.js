import React, { useState } from 'react'
import list from "../Constants/list";

const Multiselect = (props) => {
  const [data, setData] = useState(list);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'allselect') {
      let newArr = data.map((item) => {
        if (item.isChecked) item.isChecked = !item.isChecked;
        else item.isChecked = true;
        return item;
      });
      setData(newArr);
    } else {
      let newArr = data.map((item) => {
        if (item.name === name) {
          item.isChecked = checked;
        }
        return item;
      })
      setData(newArr);
    }
  }


  return (
    <div>

      <span>Select Items</span>

      <div className='form-check'>
        <input name='allselect' checked={data.filter(item => item.isChecked !== true).length === 0 ? true : false} onChange={handleChange} key={100} type="checkbox" className='form-check-input' />
        <label className='form-check-label'>Select All </label>
      </div>
      {
        data && data.map((item, index) => (
          <div className='form-check'>
            <input onChange={handleChange} key={item.id} name={item.name} checked={item.isChecked || false} type="checkbox" className='form-check-input' />
            <label className='form-check-label'>{item.name}</label>
          </div>
        ))
      }


    </div>
  )
}

export default Multiselect