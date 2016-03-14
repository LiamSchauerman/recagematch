import React from 'react';
const style = require('./style.scss');
console.log(style);
const Entry = ({data}) => {
  const {image, title, id} = data;
  return (
    <div className={style.entry}>
      <div className={style.header}>{title}</div>
      <div onClick={() =>{console.log(id)}}>
        <img src={image}/>
      </div>
    </div>
  )
};

export default Entry;