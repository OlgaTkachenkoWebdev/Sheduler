import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const spots = props.spots;

  let dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': !spots
  })

  const formatSpots = function(spots) {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return "1 spot remaining" 
    } else {
      return `${spots} spots remaining`
    }
  }

  return (
    <li 
    className={dayClass} 
    onClick={() => props.setDay(props.name)}
    >
      <h2>{props.name}</h2>
      <h3>{formatSpots(spots)}</h3>
    </li>
  );
}