import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';


const Box = () => {
  const num = useSelector(state=>state.num)
  return (
    <div>
      {num}
      <GrandSonBox />
    </div>
  )
}

export default Box
