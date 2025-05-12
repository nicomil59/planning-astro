import React from "react";
import GroupByDateJSX from "./GroupByDate";
import {
  getShowsByDate,
  getShowsByPlatform,
  getSortedShowsByDate,
} from "../../scripts/utils";

const ShowsList = ({ showsToDisplay }) => {
  const formatShows = (shows) => {
    const showsByDate = getShowsByDate(shows);
    const sortedShowsByDate = getSortedShowsByDate(showsByDate);

    const computedShows = sortedShowsByDate.map((group) => {
      const showsByPlatform = getShowsByPlatform(group.shows);

      return {
        date: group.date,
        shows: showsByPlatform,
        id: Math.random().toString(36).slice(2, 12),
      };
    });

    return computedShows;
  };

  return (
    <div>
      {showsToDisplay.length > 0 ? (
        formatShows(showsToDisplay).map((dateGroup) => (
          <GroupByDateJSX key={dateGroup.id} {...dateGroup} />
        ))
      ) : (
        <p className="text-lg">
          Aucune série disponible pour cette (ou ces) catégorie(s)
          actuellement... 🤷‍♂️
        </p>
      )}
    </div>
  );
};

export default ShowsList;