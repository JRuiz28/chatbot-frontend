import React from 'react';
import messageIcon from '../../images/icons/message.svg';
import exitIcon from '../../images/icons/exit.svg';

import '../../styles/buttonChat.css';

function ButtonChat ({status, handle}) {

  // Rendered.
  const renderedIcon = (
    <img src={!status ? messageIcon : exitIcon} alt="Icono de chatbot" />
  );

  const renderedTooltip = (
    <span className='tooltip'>{!status ? 'Chatbot' : 'Salir'}</span>
  );

  return (
    <button className='buttonChat' onClick={handle}>
      {renderedIcon}
      {renderedTooltip}
    </button>
  )
}

export default ButtonChat;
