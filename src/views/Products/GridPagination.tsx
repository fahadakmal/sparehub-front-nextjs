import { Box, Pagination } from '@mui/material'
import React from 'react'
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/KeyboardArrowLeft';;
import ArrowForwardIcon from '@mui/icons-material/KeyboardArrowRight';
import i18next from 'i18next';


const classes = {
  pagination: {
    padding:2,
    '& li': {
      '& .Mui-selected': {
        backgroundColor: '#10113A',
        color:'#fff',
        '&:hover': {
          backgroundColor: '#10113A',
        }
      }
      
    }

  }
}

const GridPagination = () => {
  return (
<Box display={'flex'} alignItems={'center'} justifyContent='center'>
     <Pagination   size='large' sx={classes.pagination} count={10} shape='rounded' variant="outlined" 
         renderItem={(item) => (
          <PaginationItem
            components={{ previous: i18next.language ==='ar' ? ArrowForwardIcon: ArrowBackIcon, next:i18next.language ==='ar' ? ArrowBackIcon: ArrowForwardIcon }}
            {...item}
          />
        )}
     />
</Box>
  )
}

export default GridPagination