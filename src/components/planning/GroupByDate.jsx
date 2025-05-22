import React from "react";
import GroupByPlatformJSX from "./GroupByPlatform";
import { formatDate } from "../../scripts/utils";

const GroupByDate = ({ date, shows }) => {
    return (
    <div className="my-8 sm:my-12">
      <h3 className="font-bold text-lg sm:text-xl mb-2">{formatDate(date)}</h3>
      {shows.map((platformGroup) => (
        <GroupByPlatformJSX key={platformGroup.platform} {...platformGroup} />
      ))}
    </div>
  );
};

export default GroupByDate;
