import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
    const num = useSelector(state => state.num)
  return (
    <div>
      this is grandsonbox {num} 
    </div>
  )
}

export default GrandSonBox
