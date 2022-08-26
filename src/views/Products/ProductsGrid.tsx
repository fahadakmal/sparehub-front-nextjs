import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './ProductData';

export default function ProductsGrid() {
  return (
    <Box sx={{ height: 900, width: '100%' }}>
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
            width: 'fit-content',
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
      />
    </Box>
  );
}
