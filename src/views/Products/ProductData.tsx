import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { Engin, Tyre, Shock, Earbox, ClutchPlate } from '../../../public/images';
import Image from 'next/image';
import { MoreVert } from '@mui/icons-material';
export const rows = [
  {
    id: '125AJK5698OPI1',
    category: 'Alternator',
    productName: 'Alternator engine',
    price: 35,
    stock: 35,
    rating: 5,
    product: Engin,
  },
  { id: '125AJK5698OPI2', category: 'Tyre', productName: 'Car Tyre', price: 42, stock: 42, rating: 2, product: Tyre },
  {
    id: '125AJK5698OPI3',
    category: 'Auto Mobile',
    productName: 'Clutch plate',
    price: 45,
    stock: 45,
    rating: 5,
    product: ClutchPlate,
  },
  {
    id: '125AJK5698OPI4',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 16,
    stock: 16,
    rating: 4,
    product: Earbox,
  },
  {
    id: '125AJK5698OPI5',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 42,
    stock: 42,
    rating: 5,
    product: Shock,
  },
  {
    id: '125AJK5698OPI6',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 15,
    stock: 15,
    rating: 0,
    product: Shock,
  },
  {
    id: '125AJK5698OPI7',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 44,
    stock: 44,
    rating: 4,
    product: Earbox,
  },
  {
    id: '125AJK5698OPI8',
    category: 'Alternator',
    productName: 'Alternator engine ',
    price: 36,
    stock: 36,
    rating: 5,
    product: Engin,
  },
  { id: '125AJK5698OPI9', category: 'Tyre', productName: 'Car Tyre', price: 65, stock: 65, rating: 5, product: Tyre },
];

export const columns: any = [
  { field: 'id', headerName: 'Product Code', flex: 0.5 },
  {
    field: 'productName',
    headerName: 'Product Name',
    flex: 1,
    renderCell: (params: any) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} width="100%">
        <Image height={40} width={40} src={params.row.product} />
        <Typography>{params.value}</Typography>
      </Box>
    ),
  },
  { field: 'category', headerName: 'Category', flex: 0.5 },
  {
    field: 'price',
    headerName: 'Price',
    flex: 0.5,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'stock',
    headerName: 'Stock',
    flex: 0.5,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'rating',
    headerName: 'Rating',
    flex: 0.5,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: any) => (
      <>
        <Rating max={1} value={2} />
        <Typography>{params.value}</Typography>
      </>
    ),
  },
  {
    renderCell: (params: any) => <MoreVert />,
    align: 'center',
    type: 'actions',
    field: 'actions',
  },
];
