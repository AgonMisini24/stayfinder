"use client";

type SearchBarProps = {
  destination: string;
  checkin: string;
  checkout: string;
  guests: number;

  onDestinationChange: (value: string) => void;
  onCheckinChange: (value: string) => void;
  onCheckoutChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
  onSearch: () => void;
};

export default function SearchBar({
  destination,
  checkin,
  checkout,
  guests,
  onDestinationChange,
  onCheckinChange,
  onCheckoutChange,
  onGuestsChange,
  onSearch,
}: SearchBarProps) {
  return (
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
            onChange={(e) => onDestinationChange(e.target.value)}
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
            onChange={(e) => onCheckinChange(e.target.value)}
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
            onChange={(e) => onCheckoutChange(e.target.value)}
            className="text-sm text-gray-700 outline-none"
          />
        </div>

        {/* Guest counter */}
        <div>
          <p className="text-sm font-bold">Who</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onGuestsChange(Math.max(1, guests - 1))}
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
              onClick={() => onGuestsChange(guests + 1)}
              className="rounded-full border border-gray-300 px-3 py-1"
            >
              +
            </button>
          </div>
        </div>

        {/* Search button */}
        <button
          type="button"
          onClick={onSearch}
          className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white hover:bg-rose-600"
        >
          Search
        </button>
      </div>
    </section>
  );
}
