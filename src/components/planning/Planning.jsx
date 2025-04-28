import React from "react";
import shows from "../../data/showsWithCategory.json";
import SectionTitleJSX from "../SectionTitle";
import GroupByDateJSX from "./GroupByDate";
import { getShowsByDate, getShowsByPlatform, getSortedShowsByDate } from "../../scripts/utils";

const Planning = () => {
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

  return (
    <section id="planning" className="my-12 sm:my-24">
      <SectionTitleJSX text="Planning" />
      {computedShows.map((dateGroup) => (
        <GroupByDateJSX key={dateGroup.id} {...dateGroup} />
      ))}
    </section>
  );
};

export default Planning;
