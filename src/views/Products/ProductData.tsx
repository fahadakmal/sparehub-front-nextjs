import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { Engin, Tyre, Shock, Earbox, ClutchPlate } from '../../../public/images';
import Image from 'next/image';
import ProductMenu from './ProductMenu';
export const rows = [
  {
    id: '125AJK5698OPI1',
    category: 'Alternator',
    productName: 'Alternator engine',
    price: 35.32,
    stock: 35,
    rating: 5,
    product: Engin,
  },
  {
    id: '125AJK5698OPI2',
    category: 'Tyre',
    productName: 'Car Tyre',
    price: 42.32,
    stock: 42,
    rating: 2,
    product: Tyre,
  },
  {
    id: '125AJK5698OPI3',
    category: 'Auto Mobile',
    productName: 'Clutch plate',
    price: 45.32,
    stock: 45,
    rating: 5,
    product: ClutchPlate,
  },
  {
    id: '125AJK5698OPI4',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 16.32,
    stock: 16,
    rating: 4,
    product: Earbox,
  },
  {
    id: '125AJK5698OPI5',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 42.32,
    stock: 42,
    rating: 5,
    product: Shock,
  },
  {
    id: '125AJK5698OPI6',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 15.32,
    stock: 15,
    rating: 0,
    product: Shock,
  },
  {
    id: '125AJK5698OPI7',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 44.32,
    stock: 44,
    rating: 4,
    product: Earbox,
  },
  {
    id: '125AJK5698OPI8',
    category: 'Alternator',
    productName: 'Alternator engine ',
    price: 36.32,
    stock: 36,
    rating: 5,
    product: Engin,
  },
  {
    id: '125AJK5698OPI9',
    category: 'Tyre',
    productName: 'Car Tyre',
    price: 65.32,
    stock: 65,
    rating: 5,
    product: Tyre,
  },
];

export const renderColumns = (translate: any): any => {
  return [
    { field: 'id', headerName: translate('PRODUCT_CODE'), flex: 0.5 },
    {
      field: 'productName',
      headerName: translate('PRODUCT_NAME'),
      flex: 1,
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} width="100%">
          <Image height={40} width={40} src={params.row.product} />
          <Typography>{params.value}</Typography>
        </Box>
      ),
    },
    { field: 'category', headerName: translate('CATEGORY'), flex: 0.5 },
    {
      field: 'price',
      headerName: translate('PRICE'),
      flex: 0.5,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'stock',
      headerName: translate('STOCK'),
      flex: 0.5,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'rating',
      headerName: translate('RATING'),
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
      renderCell: (params: any) => <ProductMenu params={params} translate={translate} />,
      align: 'center',
      type: 'actions',
      field: 'actions',
    },
  ];
};
