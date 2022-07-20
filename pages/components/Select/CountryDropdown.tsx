import React from 'react';
import { InputLabel } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';
import { translate } from '../../utils';

const CountryDropdown = ({ handleChange, selected }: any) => {
  return (
    <>
      <InputLabel sx={{ marginBottom: 1 }}>{translate('SELECT_COUNTRY')}</InputLabel>
      <ReactFlagsSelect
        countries={['SA', 'KW', 'AE', 'OM', 'BH', 'QA']}
        className="country-dropdown"
        selected={selected}
        onSelect={(code: any) => handleChange(code)}
      />
    </>
  );
};

export default CountryDropdown;
