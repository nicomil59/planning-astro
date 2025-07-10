import React, { useState } from "react";
import shows from "../../data/shows.json";
import SectionTitleJSX from "../SectionTitle";
import ShowFilter from "./ShowFilter";
import ShowsList from "./ShowsList";

const Planning = () => {
  // Génération manuelle des catégories
  const CATEGORIES = [
    "Tous",
    "Netflix",
    "Prime Video",
    "Disney+",
    "Apple TV+",
    "Paramount+",
    "HBO Max",
    "TNT",
    "SVOD",
    "Canal+",
    "OCS",
    "Câble",
  ];

  // État des séries filtrées
  const [filteredShows, setFilteredShows] = useState(shows);

  // État pour l'indicateur de chargement
  const [isUpdating, setIsUpdating] = useState(false);

  // Fonction de filtrage
  const filterShows = (selectedCategories) => {
    setIsUpdating(true);

    // Simule un délai pour l'effet de chargement
    setTimeout(() => {
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

      // Masquer l'indicateur de chargement après le filtrage
      setIsUpdating(false);
    }, 300); // Délai de 300ms pour l'effet visuel
  };

  return (
    <section id="planning" className="my-12 sm:my-24">
      <SectionTitleJSX text="Planning" />
      <ShowFilter categories={CATEGORIES} onFilterChange={filterShows} />
      {/* Liste avec effet de transition opacity */}
      <div className={`transition-opacity duration-300 ease-out ${isUpdating ? 'opacity-40' : 'opacity-100'}`}>
        <ShowsList showsToDisplay={filteredShows} />
      </div>
    </section>
  );
};

export default Planning;
