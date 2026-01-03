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
      {/* Compteur pour confirmer l'action instantanée */}
      <div className="text-sm text-gray-500 font-medium mb-4 transition-all opacity-100">
        {showsToDisplay.length} série{showsToDisplay.length > 1 ? 's' : ''} trouvée{showsToDisplay.length > 1 ? 's' : ''}
      </div>

      {showsToDisplay.length > 0 ? (
        formatShows(showsToDisplay).map((dateGroup) => (
          <div
            key={dateGroup.id}
            className="animate-in"
            style={{ animation: "slideUpFade 0.4s ease-out forwards" }}
          >
            <GroupByDateJSX {...dateGroup} />
          </div>
        ))
      ) : (
        <p className="text-lg">
          Aucune série disponible pour cette (ou ces) catégorie(s)
          actuellement... 🤷‍♂️
        </p>
      )}

      {/* Injection de l'animation sans fichier config */}
      <style>{`
        @keyframes slideUpFade {
          from { 
            opacity: 0; 
            transform: translateY(15px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default ShowsList;
