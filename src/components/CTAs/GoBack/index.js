import React from 'react';
import './goback.scss';

const handleGoBack = event => {
  event.preventDefault();
  window.history.back();
}
export default () => {
  return window.history ?
    (
      <div className="go-back cta cta--dark">
        <a
          href="#"
          onClick={event => handleGoBack(event)}
        >
          &lt; Go back
        </a>
      </div>
    ) :
    null;
}