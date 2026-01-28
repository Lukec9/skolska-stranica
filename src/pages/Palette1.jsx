import "../styles/palette1.css";

function Palette1() {
  return (
    <div className="palette-demo palette1">
      <div className="demo-container">
        <h1>Option 1: Professional Academic</h1>
        <p className="subtitle">Blue & Gold Theme</p>

        <div className="color-swatches">
          <div className="swatch primary">
            <span>Primary</span>
            <code>#1e3a8a</code>
          </div>
          <div className="swatch accent">
            <span>Accent</span>
            <code>#f59e0b</code>
          </div>
          <div className="swatch background">
            <span>Background</span>
            <code>#0f172a</code>
          </div>
          <div className="swatch highlight">
            <span>Highlight</span>
            <code>#3b82f6</code>
          </div>
        </div>

        <div className="demo-card">
          <h2>Sample Card</h2>
          <p>
            This is how content would look with this palette. The deep blue creates a
            professional, trustworthy atmosphere perfect for educational
            institutions.
          </p>
          <button className="demo-button">Call to Action</button>
        </div>

        <div className="demo-nav">
          <a href="#" className="nav-item">
            Link 1
          </a>
          <a href="#" className="nav-item">
            Link 2
          </a>
          <a href="#" className="nav-item active">
            Link 3
          </a>
        </div>
      </div>
    </div>
  );
}

export default Palette1;
