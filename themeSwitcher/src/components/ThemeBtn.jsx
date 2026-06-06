export default function ThemeBtn({ theme, toggleTheme }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <div
        className={`w-11 h-6 rounded-full transition-colors duration-300
    ${theme === "dark" ? "bg-blue-600" : "bg-gray-300"}
    
    peer-focus:outline-none
    peer-focus:ring-4
    peer-focus:ring-blue-300`}
      >
        <div
          className={`absolute top-[2px] left-[2px]
      bg-white border rounded-full h-5 w-5 transition-transform duration-300
      ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </div>

      <span
        className={`ml-3 text-sm font-medium transition-colors duration-300
    ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        Toggle Theme
      </span>
    </label>
  );
}
