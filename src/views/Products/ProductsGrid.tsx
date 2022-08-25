import { HomeMaxRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { Engin } from '../../../public/images';
import ProductMenu from './ProductMenu';

const columns: any = [
  { field: 'id', headerName: 'Product Code', flex: 0.5 },
  {
    field: 'productName',
    headerName: 'Product Name',
    flex: 1,
    renderCell: (params: any) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} width="100%">
        <Image height={40} width={40} src={Engin} />
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
  },
  {
    renderCell: (params: any) => <ProductMenu params={params} />,
    align: 'center',
    type: 'actions',
    field: 'actions',
  },
];
const rows = [
  { id: '125AJK5698OPI1', category: 'Alternator', productName: 'Alternator engine', price: 35, stock: 35, rating: 5 },
  { id: '125AJK5698OPI2', category: 'Tyre', productName: 'Car Tyre', price: 42, stock: 42, rating: 2 },
  { id: '125AJK5698OPI3', category: 'Auto Mobile', productName: 'Clutch plate', price: 45, stock: 45, rating: 5 },
  {
    id: '125AJK5698OPI4',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 16,
    stock: 16,
    rating: 6,
  },
  {
    id: '125AJK5698OPI5',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 42,
    stock: 42,
    rating: 5,
  },
  {
    id: '125AJK5698OPI6',
    category: 'Auto Mobile',
    productName: 'Radio shock absorber',
    price: 15,
    stock: 15,
    rating: 0,
  },
  {
    id: '125AJK5698OPI7',
    category: 'Auto Mobile',
    productName: 'Earbox transmission',
    price: 44,
    stock: 44,
    rating: 4,
  },
  { id: '125AJK5698OPI8', category: 'Alternator', productName: 'Alternator engine ', price: 36, stock: 36, rating: 6 },
  { id: '125AJK5698OPI9', category: 'Tyre', productName: 'Car Tyre', price: 65, stock: 65, rating: 5 },
];

export default function ProductsGrid() {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#E7E6EB',
            fontSize: 16,
          },
          '& .MuiDataGrid-cell': {
            backgroundColor: '#fff',
          },
        }}
        rows={rows}
        columns={columns}
        hideFooterPagination={true}
        rowHeight={80}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedRows = rows.filter((row) => ids.includes(row.id));

          console.log(selectedRows);
        }}
      />
    </Box>
  );
}
