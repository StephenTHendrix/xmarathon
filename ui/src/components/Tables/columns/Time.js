import { formatTime } from '../../../utils/utils';

export default {
  id: 'time',
  Header: 'Time',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time),
  width: 85,
  style: {
    textAlign: 'center'
  }
};
