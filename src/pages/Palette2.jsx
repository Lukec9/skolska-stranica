import "../styles/palette2.css";

function Palette2() {
  return (
    <div className="palette-demo palette2">
      <div className="demo-container">
        <h1>Option 2: Modern & Energetic</h1>
        <p className="subtitle">Navy & Coral Theme</p>

        <div className="color-swatches">
          <div className="swatch primary">
            <span>Primary</span>
            <code>#0ea5e9</code>
          </div>
          <div className="swatch accent">
            <span>Accent</span>
            <code>#f97316</code>
          </div>
          <div className="swatch background">
            <span>Background</span>
            <code>#1e293b</code>
          </div>
          <div className="swatch highlight">
            <span>Highlight</span>
            <code>#06b6d4</code>
          </div>
        </div>

        <div className="demo-card">
          <h2>Sample Card</h2>
          <p>
            This is how content would look with this palette. The bright sky blue
            with orange accents creates an energetic, modern feel that appeals to
            younger audiences.
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

export default Palette2;
