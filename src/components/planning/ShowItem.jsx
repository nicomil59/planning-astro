import React from "react";

const ShowItem = ({ Titre, Saison, Pays, Heure, Note }) => {
  const listePays = Pays.split(", ");

  return (
    <div className="max-w-3xl text-sm sm:text-base rounded p-2 my-1">
      <div className="flex gap-3 flex-wrap">
        {Heure === "00:00:00" ? (
          ""
        ) : (
          <span className="font-semibold text-notionyellow-600 dark:text-notionyellow-300">
            {Heure.slice(0, 5)}
          </span>
        )}
        <div className="font-semibold">{Titre}</div>
        <div className="">{Saison}</div>
        <div className="flex gap-2 items-center">
          {listePays.map((pays) => (
            <span key={pays} className="bg-notionyellow-100 text-xs font-medium px-2.5 py-0.5 rounded-sm dark:text-darktext-200 dark:bg-darkbgBrown-700">
              {pays}
            </span>
          ))}
        </div>
      </div>
      {Note !== null && (
        <>
          <hr className="my-1" />
          <div className="italic text-sm">{Note}</div>
        </>
      )}
    </div>
  );
};

export default ShowItem;
