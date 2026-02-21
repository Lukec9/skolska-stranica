import Footer from "../components/Footer";
import "../styles/footer-demo.css";

function FooterDemo() {
  return (
    <div className="footer-demo-page">
      <div className="footer-demo-header">
        <h1>Footer Demo</h1>
        <p>Preview footer sekcije prije implementacije na glavnu stranicu.</p>
      </div>

      <div className="footer-demo-preview">
        <Footer />
      </div>
    </div>
  );
}

export default FooterDemo;
