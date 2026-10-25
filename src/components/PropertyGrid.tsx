import PropertyCard from "./PropertyCard";
import type { Property } from "@/types/property";

type PropertyGridProps = {
  properties: Property[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onClearFilters: () => void;
};

export default function PropertyGrid({
  properties,
  favorites,
  onToggleFavorite,
  onClearFilters,
}: PropertyGridProps) {
  // Display this when no properties match
  if (properties.length === 0) {
    return (
      <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          No properties found
        </h3>

        <p className="mt-2 text-gray-500">
          Try searching for a different destination or category.
        </p>

        <button
          type="button"
          onClick={onClearFilters}
          className="mt-5 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white hover:bg-rose-600"
        >
          Clear filters
        </button>
      </div>
    );
  }

  // Display property cards
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.includes(property.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
