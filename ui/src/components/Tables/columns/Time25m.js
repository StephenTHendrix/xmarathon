import { formatTime } from '../../../utils/utils';

export default {
  id: 'time_25m',
  Header: '25m',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time_25m),
  style: {
    textAlign: 'center'
  }
};
