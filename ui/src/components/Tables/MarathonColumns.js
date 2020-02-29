import Place from "./columns/Place";
import Name from "./columns/Name";
import Age from "./columns/Age";
import SexPlace from "./columns/SexPlace";
import Sex from "./columns/Sex";
import Rank from "./columns/Rank";
import Rank10k from "./columns/Rank10k";
import Time10k from "./columns/Time10k";
import Time15k from "./columns/Time15k";
import Rank15k from "./columns/Rank15k";
import Halfway from "./columns/Halfway";
import HalfwayRank from "./columns/HalfwayRank";
import Time35k from "./columns/Time15k";
import Rank35k from "./columns/Rank35k";
import Time25m from "./columns/Time25m";
import Time from "./columns/Time";
import Pace from "./columns/Pace";
import City from "./columns/City";
import State from "./columns/State";
import ClockTime from "./columns/ClockTime";
import BibNumber from "./columns/BibNumber";
import HideDesktop from "./columns/HideDesktop";
import Link from "./columns/Link";

/**
 * Array of marathon table columns to be passed into `React-Table`
 *
 * @param {object}  runner  -  a specific runner's meta data.
 *
 * @documentation https://react-table.js.org/#/story/readme
 */
export const MarathonColumns = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time10k,
  Rank10k,
  Time15k,
  Rank15k,
  Halfway,
  HalfwayRank,
  Time35k,
  Rank35k,
  Time25m,
  Time,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const MarathonColumns2017 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time10k,
  Rank10k,
  Halfway,
  HalfwayRank,
  Time,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const MarathonColumns2016 = [
  Place,
  Name,
  Age,
  Sex,
  Place,
  Sex,
  Time,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const MarathonColumns2015 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Time,
  Pace,
  City,
  State,
  ClockTime,
  BibNumber,
  Link,
  HideDesktop
];

export const MarathonColumns2014 = [
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

export const MarathonColumns2013 = [
  Place,
  Name,
  Age,
  SexPlace,
  Sex,
  Rank,
  Time10k,
  Rank10k,
  Time15k,
  Rank15k,
  Halfway,
  HalfwayRank,
  Time35k,
  Rank35k,
  Time25m,
  Time,
  Pace,
  City,
  State,
  BibNumber,
  HideDesktop
];

export const MarathonColumns2012 = [
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
