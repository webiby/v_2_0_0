import React from 'react';

export default function ProperCase({ inputString }) {
  const properCaseString = inputString
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });

  return <div>{properCaseString}</div>;
}

