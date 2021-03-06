import React from 'react';

import chatIcon from '../../icons/chatIcon.svg';
import closeIcon from '../../icons/closeIcon.svg';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="chatIcon" src={chatIcon} alt="chat"/>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close"/></a>
    </div>
  </div>
)

export default InfoBar;