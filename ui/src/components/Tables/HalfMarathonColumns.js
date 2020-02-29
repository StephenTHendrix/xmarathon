import Place from "./columns/Place";
import Name from "./columns/Name";
import Age from "./columns/Age";
import SexPlace from "./columns/SexPlace";
import Sex from "./columns/Sex";
import Rank from "./columns/Rank";
import Rank10k from "./columns/Rank10k";
import Time15k from "./columns/Time15k";
import Pace from "./columns/Pace";
import City from "./columns/City";
import State from "./columns/State";
import ClockTime from "./columns/ClockTime";
import BibNumber from "./columns/BibNumber";
import Link from "./columns/Link";
import HideDesktop from "./columns/HideDesktop";
import Time10k from "./columns/Time10k";
import ChipTime from "./columns/ChipTime";
import Time5k from "./columns/Time5k";
import Rank5k from "./columns/Rank5k";
import Time from "./columns/Time";
/**
 * Array of half-marathon table columns to be passed into `React-Table`
 *
 * @param {object}  runner  -  a specific runner's meta data.
 *
 * @documentation https://react-table.js.org/#/story/readme
 */
export const HalfMarathonColumns = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time10k,
  Rank10k,
  Time15k,
  Time,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const HalfMarathonColumns2017 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time5k,
  Rank5k,
  Time10k,
  Rank10k,
  Time15k,
  ChipTime,
  Pace,
  City,
  State,
  BibNumber,
  Link,
  HideDesktop
];

export const HalfMarathonColumns2016 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time15k,
  ChipTime,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const HalfMarathonColumns2015 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  ChipTime,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const HalfMarathonColumns2014 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Time,
  Pace,
  City,
  State,
  BibNumber,
  HideDesktop
];

export const HalfMarathonColumns2012 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Pace,
  City,
  State,
  BibNumber,
  HideDesktop
];
