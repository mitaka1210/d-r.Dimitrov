import { useState, useEffect } from 'react';
import './message.scss';
const Messages = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <div className='covid'>
      <h3>
        В връзка с COVID-19 и спазването на противо епедимичните изисквания в Република България
      </h3>
      <p> {children}</p>
    </div>
  );
};

export default Messages;
