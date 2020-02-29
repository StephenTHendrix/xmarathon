import { formatTime } from '../../../utils/utils';

export default {
  id: 'time_35k',
  Header: '35k',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.time_35k),
  style: {
    textAlign: 'center'
  }
};
