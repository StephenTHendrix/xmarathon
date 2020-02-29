import React from 'react';
import { formatTime } from '../../utils/utils';

/**
 * Renders a grid of runner data on mobile screen sizes
 * @param {object}  runner  -  a given runner object per table row
 */
function MarathonBlocks(props) {
  const { runner } = props;
  return (
    <div className="block-container">
      <div className="card-block">
        <h3 className="block-title">Place</h3>
        <p>{runner.place}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Age</h3>
        <p>{runner.age}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Sex Place</h3>
        <p>{runner.sex_place}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Sex</h3>
        <p>{runner.sex}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Rank</h3>
        <p>{runner.rank}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">10k Time</h3>
        <p>{formatTime(runner.time_10k)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">10k Rank</h3>
        <p>{runner.rank_10k}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">15k Time</h3>
        <p>{formatTime(runner.time_15k)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">15k Rank</h3>
        <p>{runner.rank_15k}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Halfway Time</h3>
        <p>{formatTime(runner.halfway)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Halfway Rank</h3>
        <p>{runner.halfway_rank}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">35k Time</h3>
        <p>{formatTime(runner.time_35k)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">35k Rank</h3>
        <p>{runner.rank_35k}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">25m Time</h3>
        <p>{formatTime(runner.time_25m)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Time</h3>
        <p>{formatTime(runner.time)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Pace</h3>
        <p>{formatTime(runner.pace)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">City</h3>
        <p>{runner.city}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">State</h3>
        <p>{runner.state}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Clock Time</h3>
        <p>{formatTime(runner.clock_time)}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Bib Number</h3>
        <p>{runner.bib_number}</p>
      </div>

      <div className="card-block">
        <h3 className="block-title">Video</h3>
        <a href={runner.link}>Youtube Link</a>
      </div>
    </div>
  );
}

export default MarathonBlocks;
