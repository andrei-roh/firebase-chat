import CircularProgress from '@material-ui/core/CircularProgress';
import { Central } from 'style';

const Spinner = () => {
  return (
    <Central>
      <CircularProgress color="secondary" />
    </Central>
  );
};

export default Spinner;
