import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <h2 className="font-bold text-xl sm:text-3xl my-4 border-b-4 sm:border-b-8 border-notionyellow-600 inline">
      {text}
    </h2>
  );
};

export default SectionTitle;
