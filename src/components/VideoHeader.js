import React from 'react'
import './VideoHeader.css'
import { ArrowBackIosIcon, CameraAltOutlinedIcon } from '@mui/icons-material/ArrowBackIos';

function VideoHeader() {
  return (
    <div className='videoHeader'>
      <ArrowBackIosIcon />
      <h3>tiktoks</h3>
      <CameraAltOutlinedIcon />
    </div>
  )
}

export default VideoHeader