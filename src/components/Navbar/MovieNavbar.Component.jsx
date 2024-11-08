import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const NavLg = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

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
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full sm:w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              placeholder="Search from movies, events, plays, sports and activities"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent border-none focus:outline-none"
              aria-label="Search"
            />
            {/* Loading State */}
            {isLoading && (
              <div aria-live="polite" className="absolute top-full mt-1 left-0 w-full text-center text-gray-500 bg-white">
                Loading...
              </div>
            )}
            {/* Search Results */}
            {!isLoading && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 left-0 w-full bg-white max-h-96 overflow-y-auto border border-gray-300 rounded-md">
                {searchResults.map((movie) => (
                  <div key={movie.id} className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                    {movie.title}
                  </div>
                ))}
              </div>
            )}
            {/* No Results Found */}
            {!isLoading && noResults && (
              <div aria-live="polite" className="absolute top-full mt-1 left-0 w-full bg-white max-h-96 overflow-y-auto text-center text-gray-500 border border-gray-300 rounded-md">
                No results found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLg;
