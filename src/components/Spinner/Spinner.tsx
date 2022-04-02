import Loader from 'react-loader-spinner';
import 'index.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner_wheel">
        <Loader type="Oval" color="#f50057" height={250} width={250} />
      </div>
    </div>
  );
};

export default Spinner;
