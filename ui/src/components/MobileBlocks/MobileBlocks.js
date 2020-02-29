import React from 'react';
import MarathonBlocks from './MarathonBlocks';
import HalfMarathonBlocks from './HalfMarathonBlocks';
import TenKBlocks from './TenKBlocks';
import FiveKBlocks from './FiveKBlocks';

/**
 * Container component that determines which data blocks to render based on
 * the selected eventType.
 *
 * @param {object}  runner         specific runner's data per table row.
 * @param {string} event           either (marathon, half-marathon, 5k, 10k).
 *
 * @return {Object} Block object.
 */
function MobileBlocks(props) {
  const renderEventBlocks = () => {
    switch (props.event) {
      case 'marathon':
        return <MarathonBlocks runner={props.runner} />;
      case 'half-marathon':
        return <HalfMarathonBlocks runner={props.runner} />;
      case '10k-run':
        return <TenKBlocks runner={props.runner} />;
      case '5k-run':
        return <FiveKBlocks runner={props.runner} />;
      default:
        return;
    }
  };

  return (
    <div className="mobile-card">
      <h2>{props.runner.name}</h2>
      {renderEventBlocks()}
    </div>
  );
}

export default MobileBlocks;
