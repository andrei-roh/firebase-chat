import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <Box
      sx={{ display: 'flex', height: '100vh' }}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Spinner;
