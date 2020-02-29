import { formatTime } from '../../../utils/utils';

export default {
  id: 'time_10k',
  Header: '10k time',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time_10k),
  width: 85,
  style: {
    textAlign: 'center'
  }
};
