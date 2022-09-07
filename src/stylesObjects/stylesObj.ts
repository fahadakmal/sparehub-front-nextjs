const styling = {
  successMessage: {
    color: 'green',
    fontSize: '14px',
    fontWeight: '600',
  },
  errorMessage: {
    color: '#E2282C',
    fontSize: '14px',
    fontWeight: '600',
  },
  strengthMsgs: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '28px',
    letterSpacing: '0.24px',
    color: '#000000',
  },
  backButton: {
    width: '56px',
    height: '56px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-6.5rem',
    marginRight: '-6rem',
    '&:hover': {
      background: '#F0F3FD',
    },
  },
  authContainerTitle: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '31px',
  },
  typoForgotPass: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '31px',
  },
  bgColor: {
    backgroundColor: '#d8e3e9',
  },
  mainSellerLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > :not(style)': {
      m: 1,
      width: '97%',
      //   height: '100vh',
    },
  },
  sellerBtnStyle: {
    color: 'black',
    background: 'inherit',
    height: '40px',
    width: '132px',
    textTransform: 'capitalize',
    borderColor: 'black',
    borderRadius: '8px',
    '&:hover': {
      background: 'black',
      color: '#FFFFFF',
      borderColor: 'black',
    },
  },
  sellerHeading: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '134.4%',
    color: '#111010',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sellerNextBtn: {
    padding: '10px',
    marginLeft: '30px',
    width: '150px',
    textTransform: 'capitalize',
    height: '56px',
  },
  sellerBackBtn: {
    width: '150px',
    padding: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px solid black',
    background: 'inherit',
    color: '#000000',
    cursor: 'pointer',
    '&:hover': {
      background: 'inherit',
      border: '1px solid black',
    },
  },
  tab: {
    color: '#000',
    textTransform: 'capitalize',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#E2282C',
      borderRadius: '5px 5px 5px 5px',
    },
  },
  rememberMeColor: {
    color: '#E2282C',
  },
  handOnLink: {
    cursor: 'pointer',
  },
};

export default styling;
