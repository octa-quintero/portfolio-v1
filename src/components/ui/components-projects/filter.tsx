import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const ProjectsFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("TODOS");
  const filterKeys = [
    { key: "filter_all", value: "TODOS" },
    { key: "filter_personal", value: "PERSONALES" },
    { key: "filter_experience", value: "EXPERIENCIAS" },
    { key: "filter_recommended", value: "RECOMENDADOS" },
  ];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
<motion.div className="container mx-auto flex flex-wrap justify-between py-4 rounded-xl mt-5 mb-5 w-full max-w-1xl"
        initial={{ opacity: 0, filter: "blur(40px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
  <div className="w-full bg-black/35  backdrop-blur-sm rounded-xl flex flex-wrap justify-between gap-1.5 max-sm:px-1.5 px-20">
    {filterKeys.map(({ key, value }) => (
      <button
        key={value}
        onClick={() => handleFilterClick(value)}
        className={`px-0 py-3 rounded-lg text-white text-xl font-bold transition-all duration-300 flex items-center 
          ${activeFilter === value ? "text-shadow-md" : ""} hover:text-shadow-lg hover:text-white 
          max-sm:text-xs max-sm:px-0 max-sm:py-3 max-sm:gap-0.2`}
      >
        {value === "RECOMENDADOS" && (
          <FaStar className="mr-0.1 text-yellow-500 text-xl max-sm:text-sm" />
        )}
        {t(key)}
      </button>
    ))}
  </div>
</motion.div>

  );
};

export default ProjectsFilter;
