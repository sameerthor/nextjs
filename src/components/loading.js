import { useEffect, useState } from "react";
import Router from "next/router";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let hideTimer;

    const showLoader = () => {
      clearTimeout(hideTimer);
      setIsLoading(true);
    };

    const hideLoader = () => {
      hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };

    Router.events.on("routeChangeStart", showLoader);
    Router.events.on("routeChangeComplete", hideLoader);
    Router.events.on("routeChangeError", hideLoader);

    return () => {
      clearTimeout(hideTimer);
      Router.events.off("routeChangeStart", showLoader);
      Router.events.off("routeChangeComplete", hideLoader);
      Router.events.off("routeChangeError", hideLoader);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="global-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="global-loader__panel">
        <div className="global-loader__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="global-loader__brand">ScoopReview</div>
        <div className="global-loader__bar" aria-hidden="true" />
      </div>

      <style jsx>{`
        .global-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 42%, rgba(46, 196, 181, 0.18), transparent 34%),
            rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }

        .global-loader__panel {
          width: min(280px, calc(100vw - 48px));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 1.25rem;
         
          border-radius: 8px;
         
        }

        .global-loader__mark {
          position: relative;
          width: 82px;
          height: 82px;
          display: grid;
          place-items: center;
        }

        .global-loader__mark::before {
          content: "";
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #247e6a;
          box-shadow: 0 0 0 8px rgba(36, 126, 106, 0.1);
        }

        .global-loader__mark span {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #247e6a;
          border-right-color: rgba(46, 196, 181, 0.85);
          animation: loader-spin 1.15s linear infinite;
        }

        .global-loader__mark span:nth-child(2) {
          inset: 9px;
          border-top-color: #142b6f;
          border-right-color: rgba(36, 126, 106, 0.55);
          animation-duration: 0.85s;
          animation-direction: reverse;
        }

        .global-loader__mark span:nth-child(3) {
          inset: 18px;
          border-top-color: rgba(46, 196, 181, 0.95);
          border-right-color: rgba(20, 43, 111, 0.55);
          animation-duration: 1.4s;
        }

        .global-loader__brand {
          color: #1f2937;
          font-weight: 700;
          font-size: 1rem;
        }

        .global-loader__bar {
          width: 100%;
          height: 3px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(36, 126, 106, 0.12);
        }

        .global-loader__bar::before {
          content: "";
          display: block;
          width: 42%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #247e6a, #2ec4b5, #142b6f);
          animation: loader-slide 1.05s ease-in-out infinite;
        }

        @keyframes loader-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-slide {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(260%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-loader__mark span,
          .global-loader__bar::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
