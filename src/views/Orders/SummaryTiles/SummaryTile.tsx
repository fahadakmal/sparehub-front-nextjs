import { Grid, Typography, MenuItem, TextField } from '@mui/material';

const useStyles = {
  box: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '8px',
    minHeight: '96px',
    justifyContent: 'space-between',
  },

  countLabel: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '134.4%',
    letterSpacing: '0.02em',
  },
  countTypeLabel: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '134.4%',
    color: '#000000',
    opacity: 0.3,
  },
};

const SummaryTile = ({ translate, countColor, countValue, handleChange, menuItems, name, selectedRange }: any) => {
  const { box, countLabel, countTypeLabel } = useStyles;

  return (
    <Grid container bgcolor={'#ffffff'} style={box}>
      <Grid item pt={1.5} pl={2} pb={2} pr={0.5}>
        <Typography color={countColor} style={countLabel}>
          {countValue}
        </Typography>
        <Typography mt={1} style={countTypeLabel}>
          {translate(name)}
        </Typography>
      </Grid>
      <Grid item pt={1} pr={1} pb={2} pl={2}>
        <TextField
          name={name}
          value={selectedRange}
          onChange={handleChange}
          variant="standard"
          select
          InputProps={{ disableUnderline: true }}
        >
          {menuItems.map((item: any) => (
            <MenuItem value={item.value}>{translate(item.label)}</MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default SummaryTile;
