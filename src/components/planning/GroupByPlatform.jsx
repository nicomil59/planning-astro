import React from "react";
import ShowItemJSX from "./ShowItem";

const GroupByPlatform = ({ platform, shows }) => {
  return (
    <div className="my-6">
      <h4 className="inline bg-notiongray-100 text-textplatform-900 sm:text-lg rounded py-1 px-2 mb-2 dark:bg-platformDarkbg-900 dark:text-darktext-200">
        {platform}
      </h4>
      <div className="ml-8">
        {shows.map((show) => (
          <ShowItemJSX key={show.Titre} {...show} />
        ))}
      </div>
    </div>
  );
};

export default GroupByPlatform;
