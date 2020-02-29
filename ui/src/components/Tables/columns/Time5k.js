import { formatTime } from '../../../utils/utils';

export default {
  id: 'time_5k',
  Header: '5k',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time_5k),
  width: 85,
  style: {
    textAlign: 'center'
  }
};
