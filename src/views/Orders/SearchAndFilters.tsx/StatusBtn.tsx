import { Button } from '@mui/material';
import React from 'react';

const root = {
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  border: '1px solid rgba(0, 0, 0, 0.12);',
};
const StatusBtn = (props: any) => {
  const { title, selectedBtn, handleChangeBtn } = props;
  return (
    <Button
      sx={[
        root,
        {
          backgroundColor: selectedBtn === title ? '#000 !important' : 'none',
          color: selectedBtn === title ? '#fff' : '#000',
          pt: 1.2,
          pb: 1.2,
          pr: 3,
          pl: 3,
        },
      ]}
      color="inherit"
      variant="outlined"
      fullWidth
      onClick={() => {
        handleChangeBtn(title);
      }}
    >
      {title}
    </Button>
  );
};

export default StatusBtn;
