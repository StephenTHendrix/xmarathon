import Place from "./columns/Place";
import Name from "./columns/Name";
import Age from "./columns/Age";
import SexPlace from "./columns/SexPlace";
import Sex from "./columns/Sex";
import Time from "./columns/Time";
import Pace from "./columns/Pace";
import City from "./columns/City";
import State from "./columns/State";
import ClockTime from "./columns/ClockTime";
import BibNumber from "./columns/BibNumber";
import Link from "./columns/Link";
import HideDesktop from "./columns/HideDesktop";

/**
 * Array of 5k table columns to be passed into `React-Table`
 *
 * @param {object}  runner  -  a specific runner's meta data.
 *
 * @documentation https://react-table.js.org/#/story/readme
 */
export const FiveKColumns = [
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

export const FiveKColumns2017 = [
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
  Link,
  HideDesktop
];

export const FiveKColumns2014 = [
  Place,
  Name,
  Age,
  SexPlace,
  Time,
  Pace,
  City,
  State,
  BibNumber,
  Link,
  HideDesktop
];

export const FiveKColumns2012 = [
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
