import React from 'react';
import { InputLabel } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';

const CountryDropdown = ({ handleChange, selected, translate }: any) => {
  return (
    <>
      <InputLabel sx={{ marginBottom: 1 }}>{translate('SELECT_COUNTRY')}</InputLabel>
      <ReactFlagsSelect
        countries={['SA', 'KW', 'AE', 'OM', 'BH', 'QA', 'PK']}
        className="country-dropdown"
        selected={selected}
        onSelect={(code) => handleChange(code)}
      />
    </>
  );
};

export default CountryDropdown;
