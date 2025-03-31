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
    <div className="container mx-auto flex flex-wrap justify-between gap-0 py-4 rounded-xl mt-5 mb-5 w-full max-w-1xl">
      {filters.map((filter) => (
        <button
  key={filter}
  onClick={() => handleFilterClick(filter)}
  className={`px-1 py-2 rounded-lg text-white text-xl font-bold transition-all duration-300 flex items-center 
  ${activeFilter === filter ? "text-shadow-md" : ""} hover:text-shadow-lg hover:text-white 
  max-sm:text-lg md:text-xl`}
>
  {filter === "RECOMENDADOS" && <FaStar className="mr-1 text-yellow-500 text-xl" />}
  {filter}
</button>

      ))}
    </div>
  );
};

export default ProjectsFilter;
