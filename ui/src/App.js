import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
import SortTable from './components/Tables/SortTable';
import LoadingIcon from './components/LoadingIcon';
import { createBrowserHistory } from 'history';
import {
  MarathonColumns,
  MarathonColumns2017,
  MarathonColumns2016,
  MarathonColumns2015,
  MarathonColumns2014,
  MarathonColumns2012
} from './components/Tables/MarathonColumns';

import {
  HalfMarathonColumns,
  HalfMarathonColumns2017,
  HalfMarathonColumns2016,
  HalfMarathonColumns2015,
  HalfMarathonColumns2014,
  HalfMarathonColumns2012
} from './components/Tables/HalfMarathonColumns';

import {
  TenKColumns,
  TenKColumns2017,
  TenKColumns2016,
  TenKColumns2014,
  TenKColumns2012
} from './components/Tables/TenKColumns';

import {
  FiveKColumns,
  FiveKColumns2017,
  FiveKColumns2014,
  FiveKColumns2012
} from './components/Tables/FiveKColumns';

let history = createBrowserHistory();

/**
 * Main container component for bootstrapping the application.
 *
 * @param {array}  data             array of all runner data.
 * @param {boolean} loading         toggles loading state based on data fetch progress.
 * @param {string} eventType        defaults to either marathon, half-marathon, 10k, or 5k.
 * @param {number} eventYear        the default year for displaying event data.
 * @param {object} SelectedRunner   whichever runner was chosen from search.
 * @param {string} filteredView     defaults to the selected view type for events.
 * @param {array} filters           choices: "default", "awards", "place", "age"
 * @param {array} tableColumnView   the event table columns to show based on `eventType`.
 *
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      eventType: 'marathon',
      eventYear: 2018,
      selectedRunner: null,
      filteredView: 'default',
      filters: ['default', 'awards', 'place', 'age'],
      tableColumnView: MarathonColumns
    };
  }

  componentDidMount = () => {
    history.push(`/${this.state.eventYear}/${this.state.eventType}`);
    this.fetchNewEvent();
  };

  /* on event type dropdown change fetch new list of runners */
  fetchNewEvent = () => {
    this.setState({ loading: true }, () => {
      fetch(
        `${window.location.origin}/data/${this.state.eventYear}/${this.state.eventType}.json`
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            data,
            loading: false
          })
        );
    });
  };

  renderMissingEvent = () => {
    return this.state.loading ? (
      <LoadingIcon />
    ) : (
      <h1>There are no results for this year</h1>
    );
  };

  renderSearch = () => {
    return this.state.loading ? (
      <LoadingIcon />
    ) : (
      <div>Searchbar removed</div>
      // <SearchBar
      //   runners={this.state.data}
      //   selectedRunnerChange={this.handleSelectedRunnerChange}
      //   updateFilterView={this.handleFilterChange}
      //   filteredView={this.state.filteredView}
      //   eventType={this.state.eventType}
      // />
    );
  };

  renderResults = () => {
    return this.state.loading ? (
      <LoadingIcon />
    ) : (
      <SortTable
        runners={this.state.data}
        maleRunners={this.state.data
          .sort((a, b) => a.time - b.time)
          .filter(runner => runner.sex === 'M')}
        femaleRunners={this.state.data
          .sort((a, b) => a.time - b.time)
          .filter(runner => runner.sex === 'F')}
        selectedRunner={this.state.selectedRunner}
        selectedRunnerChange={this.handleSelectedRunnerChange}
        filteredView={this.state.filteredView}
        eventType={this.state.eventType}
        tableColumnView={this.state.tableColumnView}
      />
    );
  };

  updateTableColumns = (event, year) => {
    let columnsObj = {};
    const columns2018 = {
      marathon: MarathonColumns,
      'half-marathon': HalfMarathonColumns,
      '10k-run': TenKColumns,
      '5k-run': FiveKColumns
    };
    const columns2017 = {
      marathon: MarathonColumns2017,
      'half-marathon': HalfMarathonColumns2017,
      '10k-run': TenKColumns2017,
      '5k-run': FiveKColumns2017
    };
    const columns2016 = {
      marathon: MarathonColumns2016,
      'half-marathon': HalfMarathonColumns2016,
      '10k-run': TenKColumns2016,
      '5k-run': FiveKColumns
    };
    const columns2015 = {
      marathon: MarathonColumns2015,
      'half-marathon': HalfMarathonColumns2015,
      '5k-run': FiveKColumns
    };
    const columns2014 = {
      marathon: MarathonColumns2014,
      'half-marathon': HalfMarathonColumns2014,
      '10k-run': TenKColumns2014,
      '5k-run': FiveKColumns2014
    };
    const columns2012 = {
      marathon: MarathonColumns2012,
      'half-marathon': HalfMarathonColumns2012,
      '10k-run': TenKColumns2012,
      '5k-run': FiveKColumns2012
    };

    switch (year) {
      case 2018:
        columnsObj = columns2018;
        break;
      case 2017:
        columnsObj = columns2017;
        break;
      case 2016:
        columnsObj = columns2016;
        break;
      case 2015:
        columnsObj = columns2015;
        break;
      case 2014:
        columnsObj = columns2014;
        break;
      case 2012:
        columnsObj = columns2012;
        break;
      default:
        columnsObj = columns2018;
        break;
    }

    this.setState({
      tableColumnView: columnsObj[event]
    });
  };

  handleYearChange = selectedOption => {
    history.push(`/${selectedOption.value}/${this.state.eventType}`);
    this.handleSelectedRunnerChange(null);
    this.updateTableColumns(this.state.eventType, selectedOption.value);
    this.setState({ eventYear: selectedOption.value });
    this.fetchNewEvent();
  };

  handleEventChange = selectedOption => {
    history.push(`/${this.state.eventYear}/${selectedOption.value}`);
    this.handleSelectedRunnerChange(null);

    if (selectedOption.value === '-') {
      this.renderMissingEvent();
      return;
    }
    this.setState({ eventType: selectedOption.value });
    this.updateTableColumns(selectedOption.value, this.state.eventYear);
    this.fetchNewEvent();
  };

  handleFilterChange = selectedFilter => {
    this.setState({ filteredView: selectedFilter.target.id });
  };

  handleSelectedRunnerChange = newRunner => {
    this.setState({ selectedRunner: newRunner === null ? null : [newRunner] });
  };

  render() {
    window.addEventListener('orientationchange', e => this.fetchNewEvent());

    return (
      <div className="app-container">
        <Header
          event={this.state.eventType}
          year={this.state.eventYear}
          handleYearChange={this.handleYearChange}
          handleEventChange={this.handleEventChange}
          toggleVisualization={this.toggleVizView}
        />
        <div className="results-container">
          {this.renderSearch()}
          {this.renderResults()}
        </div>

        <footer className="primary-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
