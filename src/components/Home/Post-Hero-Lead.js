import React from 'react';

export default function PostHeroLead(props) {
  return (
    <div className="phlead">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
