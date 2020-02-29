import React from "react";
import Select from "react-select";

/**
 * Renders the application header.
 *
 * @param {function} handleEventChange  callback for handling changing the default event.
 * @param {function} handleYearChange   callback for updating selected year.
 * @param {string} event                either (marathon, half-marathon, 5k, 10k).
 * @param {number} year                 number value that represents the selected year
 *
 * @docs https://github.com/JedWatson/react-select
 */
function Header({handleEventChange, handleYearChange, event, year}) {
    let missingEvent = false;
    year === 2015 || year === 2014 || year === 2012
        ? (missingEvent = true)
        : null;
    return (
        <div className="canvas-header">
            <div className="primary-header">
                <div className="logo">
                    <h1 className="site-name">
                        Memphis Marathon Weekend | Finisher Results
                    </h1>
                    <h1 className="mob-name">2018 Results</h1>
                </div>

                <div className="event-filters">
                    <div className="event-year">
                        <p>Select Year:</p>
                        <Select
                            className="dropdown-filter"
                            onChange={handleYearChange}
                            isSearchable={false}
                            blurInputOnSelect={false}
                            value={{value: year, label: year}}
                            options={[
                                {value: 2018, label: "2018"},
                                {value: 2017, label: "2017"},
                                {value: 2016, label: "2016"},
                                {value: 2015, label: "2015"},
                                {value: 2014, label: "2014"},
                                {value: 2012, label: "2012"}
                            ]}
                        />
                    </div>

                    <div className="event-type">
                        <p>Select Event:</p>
                        <Select
                            className="dropdown-filter"
                            onChange={handleEventChange}
                            isSearchable={false}
                            blurInputOnSelect={false}
                            value={{value: event, label: event}}
                            options={[
                                {value: "marathon", label: "marathon"},
                                {value: "half-marathon", label: "half marathon"},
                                {
                                    value: missingEvent ? "-" : "10k-run",
                                    label: missingEvent ? "-" : "10k-run"
                                },
                                {value: "5k-run", label: "5k"}
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
