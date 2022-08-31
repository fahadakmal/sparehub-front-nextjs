import { Box, Grid, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import ProductMenu from './ProductMenu';

const styles = {
  cardImgContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  productMenuContainer: { display: 'flex', justifyContent: 'flex-end' },
};

const ProductCard = ({ translate, item }: any) => {
  const { id, category, productName, price, rating, product } = item;
  const { cardImgContainer, productMenuContainer } = styles;
  return (
    <Grid borderRadius={2} mb={1.5} p={3} bgcolor={'#fff'} container>
      <Grid sx={cardImgContainer} item xs={2}>
        <Image height={40} width={40} src={product} />
      </Grid>

      <Grid xs={8} item>
        <Typography>{productName}</Typography>
        <Box color={'#3065CC'} component={'span'} pt={1}>
          {id}
        </Box>
        <Box component={'span'} pt={1}>{` | ${category}`}</Box>
        <Box gap={1} pt={1} display={'flex'} alignItems={'center'}>
          <Rating max={1} value={1} readOnly />
          <Typography textTransform={'lowercase'} component={'span'}>
            {`${rating} ${translate('RATING')}`}{' '}
          </Typography>
        </Box>
        <Typography fontWeight={'bold'} pt={1}>{`$ ${price}`}</Typography>
      </Grid>

      <Grid sx={productMenuContainer} item xs={2}>
        <ProductMenu translate={translate} />
      </Grid>
    </Grid>
  );
};

export default ProductCard;
