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
class AgeGroupTable extends Component {
  renderTable = (runners) => {
    return (
      <ReactTable
        data={runners}
        columns={this.props.tableColumnView}
        showPageSizeOptions={false}
        defaultPageSize={runners.length}
        showPagination={runners.length > 3}
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
    return (
      <div>
        <div className="header-name">
          <h3>FEMALE OVERALL (COURSE RECORD 2:37:10)</h3>
        </div>
        {this.renderTable(this.props.femaleRunners.slice(0, 3), 3, false)}

        <div className="header-name">
          <h3>MALE OVERALL (COURSE RECORD 2:16:48)</h3>
        </div>
        {this.renderTable(this.props.maleRunners.slice(0, 3), 3, false)}
      </div>
    );
  };

  renderMastersAwards = () => {
    let maleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 39 && runner.age < 50);
    });

    let femaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 39 && runner.age < 50);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE MASTERS (40-49)</h3>
          </div>
        {this.renderTable(femaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE MASTERS (40-49)</h3>
        </div>
        {this.renderTable(maleRunners.slice(0, 3))}
      </div>
    );
  };

  renderGrandmasterAwards = () => {
    let maleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 49 && runner.age < 60);
    });

    let femaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 49 && runner.age < 60);
    });


    return (
      <div>
        <div className="header-name">
          <h3>FEMALE GRANDMASTERS (50-59)</h3>
        </div>
        {this.renderTable(femaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE GRANDMASTERS (50-59)</h3>
        </div>
        {this.renderTable(maleRunners.slice(0, 3))}
      </div>
    );
  };

  renderSeniormasterAwards = () => {
    let maleRunners = this.props.maleRunners.filter((runner) => {
      return (runner.age > 59);
    });

    let femaleRunners = this.props.femaleRunners.filter((runner) => {
      return (runner.age > 59);
    });

    return (
      <div>
        <div className="header-name">
          <h3>FEMALE SENIOR MASTERS (60 & OVER)</h3>
        </div>
        {this.renderTable(femaleRunners.slice(0, 3))}

        <div className="header-name">
          <h3>MALE GRANDMASTERS (50-59)</h3>
        </div>
        {this.renderTable(maleRunners.slice(0, 3))}
      </div>
    );
  };

  renderAgeGroup = (minAge, maxAge) => {
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
        {this.renderTable(femaleRunners)}

        <div className="header-name">
          <h3>MALE AGE GROUP ({`${minAge + 1} - ${maxAge - 1}`})</h3>
        </div>
        {this.renderTable(maleRunners)}
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
        {this.renderAgeGroup(15, 20)}
        {this.renderAgeGroup(19, 25)}
        {this.renderAgeGroup(24, 30)}
        {this.renderAgeGroup(29, 35)}
        {this.renderAgeGroup(34, 40)}
        {this.renderAgeGroup(39, 45)}
        {this.renderAgeGroup(44, 50)}
        {this.renderAgeGroup(49, 55)}
        {this.renderAgeGroup(54, 60)}
        {this.renderAgeGroup(59, 65)}
        {this.renderAgeGroup(64, 70)}
        {this.renderAgeGroup(69, 75)}
        {this.renderAgeGroup(74, 80)}
      </div>
    );
  };

  render() {
    return <div className="results-table">{this.renderFilterTable()}</div>;
  }
}

export default AgeGroupTable;