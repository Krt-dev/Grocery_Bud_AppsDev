import React, { useEffect } from 'react';

interface NotifyProps {
  type: string;
  msg: string;
  removeAlert: () => void;
  list: unknown[];
}

const Notify: React.FC<NotifyProps> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};



export default Notify;