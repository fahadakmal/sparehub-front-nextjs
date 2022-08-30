import { Box, Pagination } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import GridPagination from './GridPagination';
import { renderColumns, rows } from './ProductData';

export default function ProductsGrid({translate}:any) {
  return (
    <Box sx={{ height: 850, width: '100%' }}>
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
        columns={renderColumns(translate)}
        hideFooterPagination={true}
        rowHeight={80}
        checkboxSelection
        components={{Footer:GridPagination}}
      />
    </Box>
  );
}
