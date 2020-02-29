import { formatTime } from "../../../utils/utils";

export default {
  id: "clock_time",
  Header: "Clock Time",
  className: "hide-mobile",
  headerClassName: "hide-mobile",
  accessor: runner => formatTime(runner.clock_time),
  width: 100,
  style: {
    textAlign: "center"
  }
};
