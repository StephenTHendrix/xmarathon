import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import MobileBlocks from '../MobileBlocks/MobileBlocks';

const defaultTableStyles = {
  fontSize: '13px'
};

/**
 * Container component that determines which results table to render based
 * on the selected event.
 *
 * @param {array}  runners         array of all runner data.
 * @param {string} eventType       either (marathon, half-marathon, 5k, 10k).
 * @param {object} selectedRunner  whichever runner was chosen from search.
 * @param {string} tableColumnView table columns based on specific event.
 *
 * @documentation https://react-table.js.org/#/story/readme
 */

function SortTable({ selectedRunner, runners, eventType, tableColumnView }) {
  return (
    <div className="results-table">
      <ReactTable
        data={selectedRunner === null ? runners : selectedRunner}
        columns={tableColumnView}
        showPageSizeOptions={false}
        defaultPageSize={100}
        resizable={false}
        style={defaultTableStyles}
        className="-striped -highlight"
        SubComponent={row => {
          return <MobileBlocks runner={row.original} event={eventType} />;
        }}
      />
    </div>
  );
}

export default SortTable;
