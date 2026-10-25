export default function Header() {
  return (
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
  );
}
