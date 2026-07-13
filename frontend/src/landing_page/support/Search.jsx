import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <>
    <div className="search-container">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Eg: How do I open my account, How do I activate F&O..."
      />
    </div>
    </>
  );
}

export default SearchBar;