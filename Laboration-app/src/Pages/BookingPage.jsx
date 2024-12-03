import { Box } from '@mui/material'
import React from 'react'
import InfoCards from '../Components-BookingPage/InfoCards'
import WelcomeInfo from '../Components-BookingPage/WelcomeInfo'


const BookingPage = () => {
  
  return (
    <Box>
     <WelcomeInfo/>
      <InfoCards/>
     
    </Box>
  )
}

export default BookingPage