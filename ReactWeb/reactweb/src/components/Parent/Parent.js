import React from 'react'
import Child from '../Child/Child';
import './Parent.scss';
import items from '../skillBarData';

const Parent = () => {
  return (
    <div className='container'>
      {items.map((item) => {
          return (
            <Child 
                key={item.id}
                icon={item.icon}
                skill={item.skill}
                percentage={item.percentage}
            />
          )
      })}
      
    </div>
  )
}

export default Parent
