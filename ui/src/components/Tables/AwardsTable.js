import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";
import MobileRunnerCard from "../MobileBlocks/MobileBlocks";

const defaultTableStyles = {
  fontSize: "13px"
};

/**
 * Renders a custom html table of the results.
 * Docs: https://react-table.js.org/#/story/tree-table-hoc
 * Docs: https://react-table.js.org/#/story/foldable-table-hoc
 */
class AwardsTable extends Component {
  renderTable = (runners) => {
    return (
      <ReactTable
        data={runners}
        columns={this.props.tableColumnView}
        showPageSizeOptions={false}
        defaultPageSize={3}
        showPagination={false}
        resizable={false}
        style={defaultTableStyles}
        className="-striped -highlight"
        SubComponent={row => {
          return (
            <MobileRunnerCard
              runner={row.original}
              event={this.props.eventType}
            />
          );
        }}
      />
    );
  };

  renderOverallAwards = () => {
    let sortedFemaleRunners = this.props.femaleRunners.sort((a, b) => a.time - b.time);
    let sortedMaleRunners = this.props.maleRunners.sort((a, b) => a.time - b.time);

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE OVERALL (COURSE RECORD 2:37:10)</h3>
        </div>
        {this.renderTable(sortedFemaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE OVERALL (COURSE RECORD 2:16:48)</h3>
        </div>
        {this.renderTable(sortedMaleRunners.slice(0, 3))}
      </div>
    );
  };

  renderMastersAwards = () => {
    let sortedMaleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 39 && runner.age < 50);
    });

    let sortedFemaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 39 && runner.age < 50);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE MASTERS (40-49)</h3>
        </div>
        {this.renderTable(sortedFemaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE MASTERS (40-49)</h3>
        </div>
        {this.renderTable(sortedMaleRunners.slice(0, 3))}
      </div>
    );
  };

  renderGrandmasterAwards = () => {
    let sortedMaleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 49 && runner.age < 60);
    });

    let sortedFemaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 49 && runner.age < 60);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE GRANDMASTERS (50-59)</h3>
          </div>
        {this.renderTable(sortedFemaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE GRANDMASTERS (50-59)</h3>
        </div>
        {this.renderTable(sortedMaleRunners.slice(0, 3))}
      </div>
    );
  };

  renderSeniormasterAwards = () => {
    let sortedMaleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 59);
    });

    let sortedFemaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 59);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE SENIOR MASTERS (60 & OVER)</h3>
        </div>
        {this.renderTable(sortedFemaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE GRANDMASTERS (50-59)</h3>
        </div>
        {this.renderTable(sortedMaleRunners.slice(0, 3))}
      </div>
    );
  };

  renderAgeGroupAwards = (minAge, maxAge) => {
    let maleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > minAge && runner.age < maxAge);
    });

    let femaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > minAge && runner.age < maxAge);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE AGE GROUP ({`${minAge + 1} - ${maxAge - 1}`})</h3>
        </div>
        {this.renderTable(femaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE AGE GROUP ({`${minAge + 1} - ${maxAge - 1}`})</h3>
        </div>
        {this.renderTable(maleRunners.slice(0, 3))}
      </div>
    );
  };

  renderFilterTable = () => {

    return (
      <div className="filtered-table">

        {this.renderOverallAwards()}
        {this.renderMastersAwards()}
        {this.renderGrandmasterAwards()}
        {this.renderSeniormasterAwards()}
        {this.renderAgeGroupAwards(15, 20)}
        {this.renderAgeGroupAwards(19, 25)}
        {this.renderAgeGroupAwards(24, 30)}
        {this.renderAgeGroupAwards(29, 35)}
        {this.renderAgeGroupAwards(34, 40)}
        {this.renderAgeGroupAwards(39, 45)}
        {this.renderAgeGroupAwards(44, 50)}
        {this.renderAgeGroupAwards(49, 55)}
        {this.renderAgeGroupAwards(54, 60)}
        {this.renderAgeGroupAwards(59, 65)}
        {this.renderAgeGroupAwards(64, 70)}
        {this.renderAgeGroupAwards(69, 75)}
        {this.renderAgeGroupAwards(74, 80)}
      </div>
    );
  };

  render() {
    return <div className="results-table">{this.renderFilterTable()}</div>;
  }
}

export default AwardsTable;