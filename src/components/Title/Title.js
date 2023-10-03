import React from 'react';
import './Title.css';

const  Title = ({children, level=1, className='', type=''}) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`title ${type?`title title_type_${type}`:''} ${className}`}>{children}</Tag>
  )
}
export default Title;
