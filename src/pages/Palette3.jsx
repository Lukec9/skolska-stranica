import "../styles/palette3.css";

function Palette3() {
  return (
    <div className="palette-demo palette3">
      <div className="demo-container">
        <h1>Option 3: Creative & Fresh</h1>
        <p className="subtitle">Purple & Teal Theme</p>

        <div className="color-swatches">
          <div className="swatch primary">
            <span>Primary</span>
            <code>#8b5cf6</code>
          </div>
          <div className="swatch accent">
            <span>Accent</span>
            <code>#14b8a6</code>
          </div>
          <div className="swatch background">
            <span>Background</span>
            <code>#1e1b4b</code>
          </div>
          <div className="swatch highlight">
            <span>Highlight</span>
            <code>#a78bfa</code>
          </div>
        </div>

        <div className="demo-card">
          <h2>Sample Card</h2>
          <p>
            This is how content would look with this palette. The purple and teal
            combination is creative and fresh, complementing your existing turquoise
            elements beautifully.
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

export default Palette3;
