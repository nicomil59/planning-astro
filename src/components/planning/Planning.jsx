import React, { useState } from "react";
import shows from "../../data/showsWithCategory.json";
import SectionTitleJSX from "../SectionTitle";
import GroupByDateJSX from "./GroupByDate";
import {
  getShowsByDate,
  getShowsByPlatform,
  getSortedShowsByDate,
} from "../../scripts/utils";
import ShowFilter from "./ShowFilter";

const Planning = () => {
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

  // Génération manuelle des catégories
  const CATEGORIES = ["Tous", "Netflix", "Prime Video", "Disney+", "Apple TV+", "Paramount+", "Max", "TNT", "SVOD", "Canal", "OCS", "Câble"];

  // État des séries filtrées
  const [filteredShows, setFilteredShows] = useState(shows);

  // Fonction de filtrage
  const filterShows = (selectedCategories) => {
    if (
      selectedCategories.length === 0 ||
      selectedCategories.includes("Tous")
    ) {
      setFilteredShows(shows); // Afficher toutes les séries si aucune catégorie spécifique n'est sélectionnée
    } else {
      setFilteredShows(
        shows.filter((show) => selectedCategories.includes(show.Categorie))
      );
    }
  };

  return (
    <section id="planning" className="my-12 sm:my-24">
      <SectionTitleJSX text="Planning" />

      <ShowFilter categories={CATEGORIES} onFilterChange={filterShows} />

      <div className="transition-opacity duration-500 ease-in-out opacity-100">
        {filteredShows.length > 0 ? (formatShows(filteredShows).map((dateGroup) => (
          <GroupByDateJSX key={dateGroup.id} {...dateGroup} />
        ))) : (<p className="text-lg">Aucune série disponible pour cette (ou ces) catégorie(s) actuellement... 🤷‍♂️</p>)}
      </div>
    </section>
  );
};

export default Planning;
