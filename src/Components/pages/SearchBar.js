import React, { useState, useRef, useEffect } from "react";

const HIGHLIGHT_CLASS = "search-highlight";
const CURRENT_CLASS = "current-highlight";

// Highlight all matches, return an array of mark elements
function highlightText(root, word) {
  if (!word) return [];
  const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  let occurences = [];

  function traverse(node) {
    if (node.nodeType === 3) {
      const value = node.nodeValue;
      if (value.trim() === "") return;
      if (regex.test(value)) {
        const frag = document.createDocumentFragment();
        let lastIndex = 0;
        value.replace(regex, (match, _, offset) => {
          if (offset > lastIndex) {
            frag.appendChild(document.createTextNode(value.slice(lastIndex, offset)));
          }
          const mark = document.createElement("mark");
          mark.className = HIGHLIGHT_CLASS;
          mark.textContent = match;
          frag.appendChild(mark);
          occurences.push(mark);
          lastIndex = offset + match.length;
        });
        if (lastIndex < value.length) {
          frag.appendChild(document.createTextNode(value.slice(lastIndex)));
        }
        node.parentNode.replaceChild(frag, node);
      }
    } else if (
      node.nodeType === 1 &&
      node.childNodes &&
      !["SCRIPT", "STYLE", "MARK"].includes(node.tagName)
    ) {
      Array.from(node.childNodes).forEach(traverse);
    }
  }

  traverse(root);
  return occurences;
}

// Remove all highlights in root
function removeHighlights(root) {
  const marks = root.querySelectorAll(`mark.${HIGHLIGHT_CLASS}`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [total, setTotal] = useState(0);
  const [searched, setSearched] = useState(false); // <-- Add state to track if search was performed
  const occurenceRefs = useRef([]);
  const inputRef = useRef();
  const [searchRoot, setSearchRoot] = useState(null);

  // Determine search root on mount depending on which page we're on
  useEffect(() => {
    // Try homepage, then employees-page, then fallback to body
    let root =
      document.querySelector(".homepage") ||
      document.querySelector(".employees-page") ||
      document.body;
    setSearchRoot(root);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to and highlight the current occurrence
  useEffect(() => {
    if (total > 0 && occurenceRefs.current.length) {
      occurenceRefs.current.forEach((m, idx) => {
        if (m) m.classList.toggle(CURRENT_CLASS, idx === currentIdx);
      });
      occurenceRefs.current[currentIdx]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentIdx, total]);

  // Remove highlights and close search
  const handleClose = () => {
    if (searchRoot) removeHighlights(searchRoot);
    occurenceRefs.current = [];
    setQuery("");
    setTotal(0);
    setCurrentIdx(0);
    setSearched(false); // <-- Reset searched state
    onClose();
  };

  // Search and highlight all
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchRoot) return;
    removeHighlights(searchRoot);
    occurenceRefs.current = [];
    setCurrentIdx(0);
    setTotal(0);

    if (query.trim() === "") {
      setSearched(false);
      return;
    }

    occurenceRefs.current = highlightText(searchRoot, query);
    setTotal(occurenceRefs.current.length);
    setCurrentIdx(occurenceRefs.current.length > 0 ? 0 : 0);
    setSearched(true); // <-- Set searched to true after a search

    if (occurenceRefs.current.length) {
      occurenceRefs.current[0].classList.add(CURRENT_CLASS);
      occurenceRefs.current[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Remove highlights on clear
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "" && searchRoot) {
      removeHighlights(searchRoot);
      occurenceRefs.current = [];
      setTotal(0);
      setCurrentIdx(0);
      setSearched(false); // <-- Reset searched state
    }
  };

  // Move to next/prev occurrence
  const goto = (step) => {
    if (total < 2) return;
    setCurrentIdx((prev) => {
      let n = prev + step;
      if (n < 0) n = total - 1;
      if (n >= total) n = 0;
      return n;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e) {
      if (!total) return;
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        goto(1);
      } else if (e.key === "ArrowDown") {
        goto(1);
      } else if (e.key === "ArrowUp") {
        goto(-1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, [total]);

  return (
    <form className="search-bar" onSubmit={handleSearch} autoComplete="off">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search this page..."
        value={query}
        onChange={handleInputChange}
        aria-label="Search"
      />
      <button type="submit">Go</button>
      {searched && total === 0 && (
        <div className="search-count" style={{ fontWeight: "bold", color: "#0077b5", marginLeft: 10 }}>0/0</div>
      )}
      {total > 0 && (
        <div className="search-nav-group">
          <span className="search-count">
            {currentIdx + 1} / {total}
          </span>
          {total > 1 && (
            <>
              <button
                type="button"
                className="search-nav-btn"
                aria-label="Previous"
                onClick={() => goto(-1)}
                tabIndex={0}
              >
                ▲
              </button>
              <button
                type="button"
                className="search-nav-btn"
                aria-label="Next"
                onClick={() => goto(1)}
                tabIndex={0}
              >
                ▼
              </button>
            </>
          )}
        </div>
      )}
      <button
        type="button"
        className="search-close"
        title="Close search"
        aria-label="Close search"
        onClick={handleClose}
      >✕</button>
    </form>
  );
};

export default SearchBar;