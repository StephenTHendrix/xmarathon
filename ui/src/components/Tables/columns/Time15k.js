import { formatTime } from '../../../utils/utils';

export default {
  id: 'time_15k',
  Header: '15k time',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time_15k),
  width: 85,
  style: {
    textAlign: 'center'
  }
};
