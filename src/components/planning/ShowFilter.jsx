import React, { useState } from "react";

const ShowFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState(["Tous"]);

  const toggleCategory = (category) => {
    
    let updatedCategories;

    if(category === "Tous") {
      updatedCategories = ["Tous"]; // si on clique sur "Tous", active uniquement "Tous"
    } else {
      if (selectedCategories.includes("Tous")) {
        updatedCategories = [category]; // si on n'a pas cliqué sur "Tous" et que "Tous" est activé, on désactive "Tous"
      } else {
        // Cas où "Tous" n'était pas sélectionné        
        const isSelected = selectedCategories.includes(category);
        updatedCategories = isSelected
          ? selectedCategories.filter((cat) => cat !== category)
          : [...selectedCategories, category];
        
      }
    }

    if(updatedCategories.length === 0) {
      updatedCategories = ["Tous"];
    }

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <div className="my-8">
      <p className="mb-8">🆕 ⚡️ Filtrez les séries par plateforme pour afficher uniquement celles qui vous intéressent.</p>
      <div id="filters" className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            className={`px-3 py-1 rounded-full text-sm transition ${
              selectedCategories.includes(cat)
                ? "bg-notionyellow-600 text-white"
                : "bg-notionyellow-50 dark:bg-notionyellow-100 dark:text-gray-800 hover:bg-notionyellow-200 dark:hover:bg-notionyellow-300"
            }`}
            data-categorie={cat}
            key={cat}
            onClick={() => toggleCategory(cat)} // Ajouter la logique au clic
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowFilter;
