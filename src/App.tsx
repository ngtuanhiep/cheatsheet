import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { tools, totalEntries } from "./data";
import { entryMatches, toolMatches } from "./lib/search";
import type { ToolFilter } from "./types";
import { ToolCard } from "./components/ToolCard";

export function App() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<ToolFilter>("all");
  const [selectedTool, setSelectedTool] = useState("all");
  const [navOpen, setNavOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery("");
        searchRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (selectedTool === "all") return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(selectedTool)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [selectedTool]);

  const visibleTools = useMemo(() => tools.filter((tool) => {
    if (selectedTool !== "all" && tool.id !== selectedTool) return false;
    if (toolMatches(tool, query)) return tool.sections.some((section) => section.entries.some((entry) => entryMatches(entry, "", typeFilter)));
    return tool.sections.some((section) => section.entries.some((entry) => entryMatches(entry, query, typeFilter)));
  }), [query, selectedTool, typeFilter]);

  const visibleEntries = visibleTools.reduce((total, tool) => total + tool.sections.reduce((sum, section) => {
    const toolNameMatches = toolMatches(tool, query);
    return sum + section.entries.filter((entry) => entryMatches(entry, toolNameMatches ? "" : query, typeFilter)).length;
  }, 0), 0);

  const chooseTool = (id: string) => {
    setSelectedTool(id);
    setNavOpen(false);
  };

  return (
    <div class="app-shell">
      <a class="skip-link" href="#main-content">Bỏ qua danh mục</a>
      <aside class={`sidebar ${navOpen ? "is-open" : ""}`} aria-label="Danh sách công cụ">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"><span>⌘</span><span>_</span></div>
          <div><strong>Terminal</strong><span>Field Guide</span></div>
          <button class="nav-close" onClick={() => setNavOpen(false)} aria-label="Đóng danh mục">×</button>
        </div>
        <nav>
          <button class={`nav-item ${selectedTool === "all" ? "is-active" : ""}`} aria-current={selectedTool === "all" ? "page" : undefined} onClick={() => chooseTool("all")}>
            <span class="nav-glyph">∞</span><span>All tools</span><small>{tools.length}</small>
          </button>
          <p class="nav-label">Toolkit</p>
          {tools.map((tool) => (
            <button class={`nav-item ${selectedTool === tool.id ? "is-active" : ""}`} aria-current={selectedTool === tool.id ? "page" : undefined} onClick={() => chooseTool(tool.id)} key={tool.id}>
              <span class="nav-glyph">{tool.icon}</span><span>{tool.name}</span>
            </button>
          ))}
        </nav>
        <div class="sidebar-foot"><span class="status-dot" />Offline-ready · {totalEntries} mục</div>
      </aside>
      {navOpen && <button class="nav-backdrop" aria-label="Đóng danh mục" onClick={() => setNavOpen(false)} />}

      <main class="main-content" id="main-content">
        <header class="hero">
          <div class="mobile-topbar">
            <button class="menu-button" onClick={() => setNavOpen(true)} aria-label="Mở danh mục">☰</button>
            <span>Terminal Field Guide</span>
          </div>
          <p class="eyebrow"><span />macOS terminal toolkit · Catppuccin Frappé</p>
          <div class="hero-layout">
            <div class="hero-message">
              <h1>Find commands fast.<br /><em>Press the right keys.</em></h1>
              <p class="hero-copy">Cheatsheet thực chiến cho terminal workflow — command có thể copy, keybinding có keycap riêng và prefix sequence không còn nhập nhằng.</p>
            </div>
            <div class="hero-inspector">
              <div class="terminal-demo" aria-label="Ví dụ chẩn đoán command fzf">
                <div class="terminal-demo-bar"><span /><span /><span /><b>command inspector</b></div>
                <div class="terminal-demo-line"><i>❯</i><code>type -a fzf</code><span class="terminal-cursor" aria-hidden="true" /></div>
                <div class="terminal-demo-output"><span>fzf is /opt/homebrew/bin/fzf</span><span>fzf is /usr/local/bin/fzf</span></div>
              </div>
              <div class="legend" aria-label="Quy ước hiển thị phím">
                <span class="legend-group"><span>Đồng thời</span><kbd>Ctrl</kbd><i>+</i><kbd>B</kbd></span>
                <b>·</b>
                <span class="legend-group"><span>Sau đó</span><kbd>Ctrl</kbd><i>+</i><kbd>B</kbd><i>→</i><kbd>C</kbd></span>
              </div>
            </div>
          </div>
        </header>

        <section class="control-bar" aria-label="Tìm kiếm và bộ lọc">
          <label class="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onInput={(event) => setQuery(event.currentTarget.value)}
              placeholder="Tìm command, use case hoặc shortcut…"
              aria-label="Tìm trong cheatsheet"
            />
            {query && <button onClick={() => setQuery("")} aria-label="Xóa tìm kiếm">×</button>}
            <kbd>⌘ K</kbd>
          </label>
          <div class="type-filter" role="group" aria-label="Loại nội dung">
            {([['all', 'Tất cả'], ['commands', 'Commands'], ['shortcuts', 'Shortcuts']] as const).map(([value, label]) => (
              <button class={typeFilter === value ? "is-active" : ""} onClick={() => setTypeFilter(value)} key={value}>{label}</button>
            ))}
          </div>
          <div class="result-count" aria-live="polite"><strong>{visibleEntries}</strong><span>kết quả</span></div>
        </section>

        <div class="tool-jump" aria-label="Truy cập nhanh">
          {tools.filter((tool) => tool.featured).map((tool) => <button onClick={() => chooseTool(tool.id)} key={tool.id}>{tool.icon}<span>{tool.name}</span></button>)}
        </div>

        <section class="tool-list" aria-label="Cheatsheet">
          {visibleTools.map((tool) => <ToolCard tool={tool} query={query} typeFilter={typeFilter} key={tool.id} />)}
          {visibleTools.length === 0 && (
            <div class="empty-state"><span>⌕</span><h2>Không tìm thấy kết quả</h2><p>Thử từ khóa ngắn hơn hoặc chuyển về “Tất cả”.</p><button onClick={() => { setQuery(""); setTypeFilter("all"); setSelectedTool("all"); }}>Xóa bộ lọc</button></div>
          )}
        </section>

        <footer class="page-footer"><span>Terminal Field Guide</span><span>Self-contained HTML · Không tracking · Chạy offline</span></footer>
      </main>
    </div>
  );
}
