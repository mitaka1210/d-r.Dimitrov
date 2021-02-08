import React from 'react';

function Card({ title, content, work, pricing }) {
  return (
    <div>
      <div>
        {title}
        {pricing}
        {content}
      </div>
      <div>{work}</div>
    </div>
  );
}

export default Card;
