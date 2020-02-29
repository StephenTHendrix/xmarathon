import { formatTime } from '../../../utils/utils';

export default {
  id: 'pace',
  Header: 'Pace',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.pace),
  width: 80,
  style: {
    textAlign: 'center'
  }
};
