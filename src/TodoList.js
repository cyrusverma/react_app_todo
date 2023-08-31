import React, { useState } from 'react';
import './Styling.css'

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity(' ');
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => i !== id);
    setListData(updatedListData);
  };
const removeAll=()=>{




    setListData([])
}
  return (
    <>
      <div className="container">
        <div className="header">TO DO LIST</div>
        <input
          type='text'
          placeholder='Add Activity'
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value)
          }}
        ></input>
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Task Need To be done 🤠</p>
        {listData.length !== 0 && listData.map((data, i) => {
          return (
            <div key={i} className='listData'>
              {data}
              <div className='btn-position'>
                <button onClick={() => removeActivity(i)}>Remove</button>
              </div>
            </div>
          );
        })}
{listData.length>=1 && <button onClick={removeAll} className="removeall">Remove All</button>
}

      </div>
    </>
  );
};

export default TodoList;
