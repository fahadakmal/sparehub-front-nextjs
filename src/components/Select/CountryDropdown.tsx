import React from 'react';
import { InputLabel } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';
import styles from '../../../styles/Common.module.css';
import { countries } from './Countries';

const CountryDropdown = ({ handleChange, selected, translate }: any) => {
  return (
    <>
      <InputLabel sx={{ marginBottom: 1, fontSize: '12px' }}>{translate('SELECT_COUNTRY')}</InputLabel>
      <ReactFlagsSelect
        searchable
        countries={countries.sort().map((country) => country.code)}
        className={styles.countryDropdown}
        selected={selected}
        onSelect={(code) => handleChange(code)}
      />
    </>
  );
};

export default CountryDropdown;
