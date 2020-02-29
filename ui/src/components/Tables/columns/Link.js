import React from 'react';

export default {
  id: 'link',
  Header: 'Link',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile no-sort',
  sortable: false,
  accessor: runner => runner.link,
  Cell: props => <a href={props.value}>video</a>,
  width: 70,
  style: {
    textAlign: 'center'
  }
};
