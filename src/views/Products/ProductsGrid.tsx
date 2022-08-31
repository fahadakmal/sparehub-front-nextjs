import { Box, Pagination } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import GridPagination from './GridPagination';
import { renderColumns, rows } from './ProductData';

const styles = {
  root: {
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
  },
};

export default function ProductsGrid({ translate, page, handleChangePage, handleSelectItems }: any) {
  const { root } = styles;
  return (
    <Box sx={{ height: 850, width: '100%' }}>
      <DataGrid
        sx={root}
        rows={rows}
        columns={renderColumns(translate)}
        hideFooterPagination={true}
        rowHeight={80}
        checkboxSelection
        components={{ Footer: GridPagination }}
        componentsProps={{
          footer: { page, handleChangePage },
        }}
        columnBuffer={8}
        onSelectionModelChange={(ids) => {
          const selectedRows = rows.filter((row) => ids.includes(row.id));
          handleSelectItems(selectedRows);
        }}
      />
    </Box>
  );
}
