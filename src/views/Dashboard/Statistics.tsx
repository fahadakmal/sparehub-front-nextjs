import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
// import '../../../styles/App.css';
import Image from 'next/image';

const statistics = [
  {
    statisticId: '01',
    image: require('../../../public/images/product.png'),
    statisticHeading: 'Total Products',
    count: 223,
    status1type: 'Active',
    status2type: 'Inactive',
    status1: 198,
    status2: 25,
  },
  {
    statisticId: '02',
    image: require('../../../public/images/order.png'),
    statisticHeading: 'Total Order',
    count: 224,
    status1type: 'Pending',
    status2type: 'Completed',
    status1: 170,
    status2: 53,
  },
  {
    statisticId: '03',
    image: require('../../../public/images/sales.png'),
    statisticHeading: 'Total Sales',
    count: 225,
    status1type: 'Monthly',
    status2type: 'Yearly',
    status1: 100,
    status2: 100,
  },
  {
    statisticId: '04',
    image: require('../../../public/images/cart.png'),
    statisticHeading: 'Total Left Carts',
    count: 226,
    status1type: 'Without',
    status2type: 'Checkout',
    status1: 100,
    status2: 100,
  },
  {
    statisticId: '05',
    image: require('../../../public/images/refund.png'),
    statisticHeading: 'Total Refund Claims',
    count: 227,
    status1type: 'Request',
    status2type: 'Refund',
    status1: 100,
    status2: 100,
  },
  {
    statisticId: '06',
    image: require('../../../public/images/promotion.png'),
    statisticHeading: 'Promotions',
    count: 228,
    status1type: 'Active',
    status2type: 'Inactive',
    status1: 100,
    status2: 100,
  },
];

export default function Statistics({ translate }: any) {
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={2}>
        {statistics &&
          statistics.map((item) => (
            <Grid key={item.count} item xs={12} sm={6} md={4} lg={4}>
              <Grid
                container
                direction="column"
                sx={{ border: '1px', borderRadius: '8px', background: '#ffffff', padding: '7px' }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  <Grid item height={50} width={50}>
                    {/* <img height={'100%'} src={item.image} alt="recaptcha" /> */}
                    <Image src={item.image} />
                  </Grid>
                  <Grid container sx={{ display: 'grid', alignItems: 'end', marginLeft: '10px' }}>
                    <Box
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontFamily: 'Mulish',
                        fontSize: '14px',
                        lineHeight: '134.4%',
                        color: '#000000',
                        opacity: '0.3',
                      }}
                    >
                      {item.statisticHeading}
                    </Box>
                    <Box
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontFamily: 'Mulish',
                        fontSize: '24px',
                        lineHeight: '134.4%',
                        color: '#000000',
                      }}
                    >
                      {item.count}
                    </Box>
                  </Grid>
                </Grid>
                <Grid item sx={{ display: 'flex' }}>
                  <Grid item sx={{ marginTop: '10px', display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontFamily: 'Mulish',
                        fontSize: '16px',
                        lineHeight: '134.4%',
                        color: '#666666',
                      }}
                    >
                      {item.status1type}:{' '}
                      <span
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontFamily: 'Mulish',
                          fontSize: '16px',
                          lineHeight: '134.4%',
                          color: '#000000',
                        }}
                      >
                        {item.status1}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: '10px', marginLeft: '10px', display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontFamily: 'Mulish',
                        fontSize: '16px',
                        lineHeight: '134.4%',
                        color: '#666666',
                      }}
                    >
                      {item.status2type}:{' '}
                      <span
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontFamily: 'Mulish',
                          fontSize: '16px',
                          lineHeight: '134.4%',
                          color: '#000000',
                        }}
                      >
                        {item.status2}
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
