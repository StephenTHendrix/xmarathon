import { formatTime } from '../../../utils/utils';

export default {
  id: 'split_5k',
  Header: '5k split',
  className: 'hide-mobile',
  headerClassName: 'hide-mobile',
  accessor: runner => formatTime(runner['5ksplit']),
  style: {
    textAlign: 'center'
  }
};
