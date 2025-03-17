import { useState } from "react";
import { FaStar } from "react-icons/fa";


interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const ProjectsFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<string>("TODOS");
  const filters = ["TODOS", "PERSONALES", "EXPERIENCIAS", "RECOMENDADOS"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
<div className="flex justify-evenly gap-0 py-4 rounded-xl mt-5 mb-5">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => handleFilterClick(filter)}
      className={`px-4 py-2 rounded-lg text-white text-3xl font-bold transition-all duration-300 flex items-center ${
        activeFilter === filter ? "text-shadow-md" : ""
      } hover:text-shadow-lg hover:text-white`}
    >
      {filter === "RECOMENDADOS" && <FaStar className="mr-0.5 text-yellow-500 text-xl" />}
      {filter}
    </button>
  ))}
</div>

  );
};

export default ProjectsFilter;
