const InstantSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="my-8 relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Rechercher une série..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="block w-full p-3 pl-4 pr-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all outline-none"
        onKeyDown={(e) => {
          if (e.key === "Escape") onSearchChange("");
        }}
      />
      {/* Affichage conditionnel de la croix */}
      {searchTerm && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={() => onSearchChange("")}
          aria-label="Effacer la recherche"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default InstantSearch;
