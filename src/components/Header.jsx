function Header({ toolCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">💎</span>
            <div className="logo-text">
              <h1>AI Gem Stack</h1>
              <p className="tagline">Tu arsenal personal de herramientas IA</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="tool-counter">
            <span className="counter-number">{toolCount}</span>
            <span className="counter-label">gems</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
