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
