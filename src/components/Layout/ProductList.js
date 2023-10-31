import { Card } from '@mui/material'
import React from 'react'
import ProductBar from './ProductBar'
import ProductBody from './ProductBody'

const ProductList = () => {
  return (
    <Card sx={{backgroundColor:'white',width:'100%',height:'150px'}}>
        <ProductBar/>
        <ProductBody/>
    </Card>
  )
}

export default ProductList