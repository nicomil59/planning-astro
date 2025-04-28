import React, { useState } from "react";

const ShowFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    const isSelected = selectedCategories.includes(category);
    const updatedCategories = isSelected
      ? selectedCategories.filter((cat) => cat !== category) // Retirer la catégorie si elle est déjà sélectionnée
      : [...selectedCategories, category]; // Ajouter la catégorie si elle est non sélectionnée

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories); // Passer les catégories sélectionnées au parent
  };

  return (
    <div className="my-8">
      <p className="text-lg font-bold">Show Filter</p>
      <div id="filters" className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            className={`px-3 py-1 rounded-full text-sm transition ${
              selectedCategories.includes(cat)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-blue-100"
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
