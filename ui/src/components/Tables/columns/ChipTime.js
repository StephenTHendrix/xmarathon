import { formatTime } from "../../../utils/utils";

export default {
  id: "chip_time",
  Header: "Time",
  className: "hide-mobile",
  headerClassName: "hide-mobile",
  accessor: runner => formatTime(runner.chip_time),
  width: 85,
  style: {
    textAlign: "center"
  }
};
