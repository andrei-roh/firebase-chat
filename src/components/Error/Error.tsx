import React from 'react';
import Loader from 'react-loader-spinner';
import 'index.css';
import { IError } from 'types';

const Error: React.FC<IError> = ({ error }) => {
  return (
    <div className="error">
      <div className="error_wheel">
        <Loader type="Grid" color="#f44336" height={250} width={250} />
        {error}
      </div>
    </div>
  );
};

export default Error;
