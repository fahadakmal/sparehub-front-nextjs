import * as React from 'react';
import { Button } from '@mui/material';
import { SxProps } from '@mui/system';

const root = {
  borderRadius: '8px',
  height: '56px',
  textAlign: 'center',
  background: '#111010',
  color: '#fff',
  letterSpacing: 0.28,
  fontWeight: '700',
  fontSize: 16,
  '&:disabled': {
    color: '#ffffff',
    backgroundColor: '#C8C8C8',
  },
  '&:hover': {
    background: '#111010',
  },
};
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  sx?: SxProps;
  fullWidth?: boolean;
  variant?: any;
  disabled?: any;
}

export const PrimaryButton = (props: ButtonProps) => {
  const styles: any = props.sx;
  return (
    <Button disableElevation {...props} sx={[root, styles]}>
      {props.children}
    </Button>
  );
};
