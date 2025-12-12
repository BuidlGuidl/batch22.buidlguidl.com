import type { NextPage } from "next";

const PortfolioIframePage: NextPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://e-l-l.github.io/portfolio-ell/"
        className="w-full h-full border-0"
        title="Prathmesh Ghatol Portfolio (e-l-l)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};

export default PortfolioIframePage;
