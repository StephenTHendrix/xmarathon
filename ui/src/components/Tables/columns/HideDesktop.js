import React from 'react';

export default {
  Header: '',
  expander: true,
  width: 65,
  className: 'hide-desktop',
  headerClassName: 'hide-desktop',
  style: {
    cursor: 'pointer',
    fontSize: 25,
    padding: 0,
    textAlign: 'center',
    userSelect: 'none',
    margin: 'auto'
  },
  Expander: ({ isExpanded, ...rest }) => (
    <div>{isExpanded ? <span>&#x2299;</span> : <span>&#x2295;</span>}</div>
  )
};
