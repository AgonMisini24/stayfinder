"use client";

import { useState } from "react";

export default function Home() {
  const [guests, setGuests] = useState(1);
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  function handleSearch() {
    // Make sure all required fields are filled in
    if (!destination.trim() || !checkin || !checkout) {
      alert("Please enter a destination and both dates.");
      return;
    }

    // Make sure the check-out date is after check-in
    if (checkout <= checkin) {
      alert("Check-out must be after check-in.");
      return;
    }

    // Show the search information
    alert(
      `Searching for stays in ${destination}
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
    </main>
  );
}
