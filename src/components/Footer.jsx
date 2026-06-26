import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono footer-text">
          © {new Date().getFullYear()} Likhit Naidu — Built with React.
        </span>
        <a href="#top" className="mono footer-back">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
