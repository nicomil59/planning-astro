import React, { useState } from "react";
import shows from "../../data/showsWithCategory.json";
import SectionTitleJSX from "../SectionTitle";
import ShowFilter from "./ShowFilter";
import ShowsList from "./ShowsList";

const Planning = () => {
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
      <ShowsList showsToDisplay={filteredShows} />
    </section>
  );
};

export default Planning;
