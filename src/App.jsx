import React from 'react';
import Morning from './Components/Morning';
import Evening from './Components/Evening';
import { WiDaySunny, WiNightAltCloudy } from 'react-icons/wi';
import style from './Components/syle.module.css' 
const App = () => {
  return (
    <div className={style.mainheading}>
      <span>പ്രപാതവും</span>
      <WiDaySunny size={24} />
      <span>പ്രദോഷവും</span>
      <WiNightAltCloudy size={24} />
      <Morning />
      <Evening />
    </div>
  );
};

export default App;

