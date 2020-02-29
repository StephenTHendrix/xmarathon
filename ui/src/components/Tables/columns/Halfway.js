import { formatTime } from '../../../utils/utils';

export default {
  id: 'halfway',
  Header: 'Halfway',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner.halfway),
  style: {
    textAlign: 'center'
  }
};
