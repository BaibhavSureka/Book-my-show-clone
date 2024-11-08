import React, { useState, useEffect } from "react";
import { BiSearch, BiHome, BiMovie, BiCalendar, BiUser, BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import logo from '../../Attachments/book_my_show.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const fetchMovies = async (query) => {
    if (query.length < 3) {
      setSearchResults([]);
      setNoResults(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setSearchResults(data.results);
        setNoResults(false);
      } else {
        setSearchResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setNoResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const timeoutId = setTimeout(() => {
        fetchMovies(searchQuery);
      }, 500); // debounce by 500ms

      return () => clearTimeout(timeoutId);
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Icon for Mobile */}
          <div className="block sm:hidden">
            <BiMenu className="text-2xl" onClick={toggleMobileMenu} />
          </div>

          {/* Logo */}
          <img src={logo} alt="BookMyShow Logo" className="w-30 h-20 object-contain" />
        </div>

        {/* Search Bar (Large Screens) */}
        <div className="hidden sm:flex items-center w-1/2 gap-3 relative">
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              placeholder="Search for movies, events, plays, sports..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent border-none focus:outline-none"
              aria-label="Search"
            />
          </div>
          {isLoading && (
            <div className="absolute top-full left-0 w-full bg-white text-center text-gray-500">
              Loading...
            </div>
          )}
          {!isLoading && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white max-h-96 overflow-y-auto border border-gray-300 rounded-md z-50">
              {searchResults.map((movie) => (
                <div key={movie.id} className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                  {movie.title}
                </div>
              ))}
            </div>
          )}
          {!isLoading && noResults && (
            <div className="absolute top-full left-0 w-full bg-white text-center text-gray-500 border border-gray-300 rounded-md z-50">
              No results found
            </div>
          )}
        </div>

        {/* Location and Sign-In Button */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-gray-700">Gurugram</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <IoMdClose className="text-2xl text-gray-700" />
            ) : (
              <BiSearch className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-14 bg-white z-50">
          <div className="flex items-center gap-3 p-3 border-b">
            <BiSearch />
            <input
              type="search"
              placeholder="Search movies, events, plays, sports..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent border-none focus:outline-none"
              aria-label="Search"
            />
          </div>
          {isLoading && (
            <div className="text-center text-gray-500 p-2">Loading...</div>
          )}
          {!isLoading && searchResults.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              {searchResults.map((movie) => (
                <div key={movie.id} className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                  {movie.title}
                </div>
              ))}
            </div>
          )}
          {!isLoading && noResults && (
            <div className="text-center text-gray-500 p-2">No results found</div>
          )}
        </div>
      )}

      {/* Bottom Navigation for Mobile */}
      <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-300 sm:hidden flex justify-around py-2 z-50 shadow-lg">
        <button
          className={`flex flex-col items-center ${activeTab === "Home" ? "text-blue-500" : "text-gray-600"}`}
          onClick={() => handleTabClick("Home")}
        >
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "Movies" ? "text-blue-500" : "text-gray-600"}`}
          onClick={() => handleTabClick("Movies")}
        >
          <BiMovie className="text-2xl" />
          <span className="text-xs">Movies</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "Events" ? "text-blue-500" : "text-gray-600"}`}
          onClick={() => handleTabClick("Events")}
        >
          <BiCalendar className="text-2xl" />
          <span className="text-xs">Events</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "Profile" ? "text-blue-500" : "text-gray-600"}`}
          onClick={() => handleTabClick("Profile")}
        >
          <BiUser className="text-2xl" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
