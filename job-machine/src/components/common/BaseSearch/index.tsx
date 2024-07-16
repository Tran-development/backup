import React, { useState, useRef, useEffect } from 'react';

interface SearchOverlayProps {
  query: string;
  setQuery: (query: string) => void;
  isOverlayOpen: boolean;
  setOverlayOpen: (state: boolean) => void;
}

const BaseSearch: React.FC<SearchOverlayProps> = ({
  query,
  setQuery,
  isOverlayOpen,
  setOverlayOpen,
}) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isOverlayOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setOverlayOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOverlayOpen, setOverlayOpen]);

  useEffect(() => {
    setOverlayOpen(!!query || isFilterOpen);
  }, [query, isFilterOpen, setOverlayOpen]);

  return (
    <div ref={ref}>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={() => setFilterOpen(!isFilterOpen)}>
        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
      </button>
      {isOverlayOpen && (
        <div>
          {/* This is where your dropdown content goes */}
          <p>Dropdown content based on query: {query}</p>
        </div>
      )}
    </div>
  );
};

export default BaseSearch;