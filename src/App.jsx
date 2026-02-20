import { useState, useMemo } from "react";
import tools from "./data/tools";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ToolGrid from "./components/ToolGrid";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = [...new Set(tools.map((t) => t.category))];
    return ["All", ...cats];
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="app">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      <Header toolCount={tools.length} />

      <main className="main-content">
        <div className="controls">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        <div className="results-info">
          <span className="results-count">
            {filteredTools.length}{" "}
            {filteredTools.length === 1 ? "herramienta" : "herramientas"}
          </span>
          {activeCategory !== "All" && (
            <span className="results-category">en {activeCategory}</span>
          )}
        </div>

        <ToolGrid tools={filteredTools} />
      </main>

      <footer className="footer">
        <p>
          AI Gem Stack &bull; Compilado con dedicación por Vectoria Labs - Para que tu potencial crezca junto al nuestro &bull;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
