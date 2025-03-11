// CardProject.tsx

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
}

const CardProjects: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
  colStart,
  rowStart,
  colSpan,
  rowSpan,
}) => {
  return (
    <div
      className="border p-4 rounded-lg"
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
    >
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Título y descripción */}
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardProjects;
