"use client";

import { useState } from "react";

// Demo accommodation data
// These are fictional properties used for learning React.
const properties = [
  {
    id: 1,
    name: "Modern city apartment",
    location: "Demo location A",
    price: 120,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Cozy mountain cabin",
    location: "Demo location B",
    price: 95,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Luxury beach villa",
    location: "Demo location C",
    price: 250,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Charming countryside home",
    location: "Demo location D",
    price: 85,
    rating: 4.6,
  },
];

export default function Home() {
  // Search form state
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);

  // Handle search button click
  function handleSearch() {
    if (!destination.trim() || !checkin || !checkout) {
      alert("Please enter a destination and both dates.");
      return;
    }

    if (checkout <= checkin) {
      alert("Check-out must be after check-in.");
      return;
    }

    alert(
      `Searching for stays in ${destination.trim()}
Check-in: ${checkin}
Check-out: ${checkout}
Guests: ${guests}`,
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-gray-200 px-8 py-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-rose-500">stayfinder</h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-gray-700">
          <a href="#">Homes</a>
          <a href="#">Experiences</a>
          <a href="#">Services</a>
        </nav>

        {/* Login button */}
        <button
          type="button"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium"
        >
          Log in
        </button>
      </header>

      {/* SEARCH SECTION */}
      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-gray-200 p-4 shadow-lg">
          {/* Destination */}
          <div>
            <label htmlFor="destination" className="block text-sm font-bold">
              Where
            </label>

            <input
              id="destination"
              type="text"
              placeholder="Search destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-40 text-sm text-gray-700 outline-none"
            />
          </div>

          {/* Check-in */}
          <div>
            <label htmlFor="checkin" className="block text-sm font-bold">
              Check in
            </label>

            <input
              id="checkin"
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="text-sm text-gray-700 outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <label htmlFor="checkout" className="block text-sm font-bold">
              Check out
            </label>

            <input
              id="checkout"
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="text-sm text-gray-700 outline-none"
            />
          </div>

          {/* Guest counter */}
          <div>
            <p className="text-sm font-bold">Who</p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setGuests((current) => current - 1)}
                disabled={guests <= 1}
                className="rounded-full border border-gray-300 px-3 py-1 disabled:opacity-30"
              >
                −
              </button>

              <span className="text-sm text-gray-700">
                {guests} {guests === 1 ? "guest" : "guests"}
              </span>

              <button
                type="button"
                onClick={() => setGuests((current) => current + 1)}
                className="rounded-full border border-gray-300 px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          {/* Search button */}
          <button
            type="button"
            onClick={handleSearch}
            className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white hover:bg-rose-600"
          >
            Search
          </button>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Explore places to stay
        </h2>

        {/* Responsive property grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              {/* Image placeholder */}
              <div className="flex h-56 items-center justify-center bg-gray-200 text-gray-500">
                Property photo
              </div>

              {/* Property details */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">
                    {property.name}
                  </h3>

                  <span className="whitespace-nowrap text-sm text-gray-700">
                    ★ {property.rating}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {property.location}
                </p>

                <p className="mt-3 text-gray-900">
                  <span className="font-bold">${property.price}</span> / night
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
