import React from 'react';
import { Box, Grid } from '@mui/material';
// import '../../App.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
// import Link from 'next/link';
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function StateGraph({ translate }: any) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid
            container
            direction="column"
            sx={{ border: '1px', borderRadius: '8px', background: '#ffffff', padding: '7px' }}
          >
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid
                item
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontFamily: 'Mulish',
                  fontSize: '24px',
                  lineHeight: '134.4%',
                  color: '#000000',
                }}
              >
                Inventory vs Time
              </Grid>
              <Box
                sx={{
                  fontFamily: 'Mulish',
                  fontSize: '14px',
                  color: '#000000',
                }}
              >
                <Select
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Placeholder</em>;
                    }

                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid
            container
            direction="column"
            sx={{ border: '1px', borderRadius: '8px', background: '#ffffff', padding: '7px' }}
          >
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <Link href="/sellerDetail"></Link> */}
              <Grid
                item
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontFamily: 'Mulish',
                  fontSize: '24px',
                  lineHeight: '134.4%',
                  color: '#000000',
                }}
              >
                Order vs Time
              </Grid>
              <Box
                sx={{
                  fontFamily: 'Mulish',
                  fontSize: '14px',
                  color: '#000000',
                }}
              >
                <Select
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Placeholder</em>;
                    }

                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
