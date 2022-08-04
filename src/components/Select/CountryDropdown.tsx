import React from 'react';
import { InputLabel } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';
import styles from '../../../styles/Common.module.css';

const CountryDropdown = ({ handleChange, selected, translate }: any) => {
  return (
    <>
      <InputLabel sx={{ marginBottom: 1 }}>{translate('SELECT_COUNTRY')}</InputLabel>
      <ReactFlagsSelect
        countries={['SA', 'KW', 'AE', 'OM', 'BH', 'QA', 'PK']}
        className={styles.countryDropdown}
        selected={selected}
        onSelect={(code) => handleChange(code)}
      />
    </>
  );
};

export default CountryDropdown;
