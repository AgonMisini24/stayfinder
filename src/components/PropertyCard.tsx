import Image from "next/image";
import type { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function PropertyCard({
  property,
  isFavorite,
  onToggleFavorite,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Property image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={`Illustrative photograph for ${property.name}`}
          fill
          loading={property.id === 1 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Demo listing badge */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-md">
          Demo listing
        </span>

        {/* Favorite button */}
        <button
          type="button"
          onClick={() => onToggleFavorite(property.id)}
          aria-label={
            isFavorite
              ? `Remove ${property.name} from favorites`
              : `Add ${property.name} to favorites`
          }
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 text-xl shadow-md transition-transform hover:scale-110"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Property information */}
      <div className="p-4">
        {/* Name and rating */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-gray-900">{property.name}</h3>

          <span className="whitespace-nowrap text-sm text-gray-700">
            ★ {property.rating}
          </span>
        </div>

        {/* Location */}
        <p className="mt-1 text-sm text-gray-500">{property.location}</p>

        {/* Price */}
        <p className="mt-3 text-gray-900">
          <span className="font-bold">${property.price}</span> / night
        </p>
      </div>
    </article>
  );
}
