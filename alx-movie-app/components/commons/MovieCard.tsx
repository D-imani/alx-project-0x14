import React from "react";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  releaseDate?: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  releaseDate,
  onClick,
}) => {
  return (
    <div
      className="w-48 bg-white rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer transition"
      onClick={onClick}
    >
      {/* Poster */}
      <img src={posterUrl} alt={title} className="w-full h-72 object-cover" />

      {/* Info */}
      <div className="p-3">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        {releaseDate && <p className="text-sm text-gray-500">{releaseDate}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
