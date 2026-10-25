"use client";

import { useState } from "react";

import { Header, SearchBar, CategoryFilters, PropertyGrid } from "@/components";

import { properties, categories } from "@/data/properties";

export default function Home() {
  // Search form state
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);

  // Filter state
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchedDestination, setSearchedDestination] = useState("");

  // Favorites state
  const [favorites, setFavorites] = useState<number[]>([]);

  // Add or remove a property from favorites
  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  }

  // Handle destination search
  function handleSearch() {
    // Validate required fields
    if (!destination.trim() || !checkin || !checkout) {
      alert("Please enter a destination and both dates.");
      return;
    }

    // Validate selected dates
    if (checkout <= checkin) {
      alert("Check-out must be after check-in.");
      return;
    }

    // Apply destination search
    setSearchedDestination(destination.trim());
  }

  // Reset search and category filters
  function clearFilters() {
    setDestination("");
    setSearchedDestination("");
    setActiveCategory("All");
  }

  // Filter properties by category and destination
  const filteredProperties = properties.filter((property) => {
    const matchesCategory =
      activeCategory === "All" || property.category === activeCategory;

    const matchesDestination = property.location
      .toLowerCase()
      .includes(searchedDestination.toLowerCase());

    return matchesCategory && matchesDestination;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* SEARCH BAR */}
      <SearchBar
        destination={destination}
        checkin={checkin}
        checkout={checkout}
        guests={guests}
        onDestinationChange={setDestination}
        onCheckinChange={setCheckin}
        onCheckoutChange={setCheckout}
        onGuestsChange={setGuests}
        onSearch={handleSearch}
      />

      {/* PROPERTY LISTINGS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Section heading */}
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Explore places to stay
        </h2>

        {/* CATEGORY FILTERS */}
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* PROPERTY GRID */}
        <PropertyGrid
          properties={filteredProperties}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClearFilters={clearFilters}
        />
      </section>
    </main>
  );
}
