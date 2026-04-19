/**
 * A single portfolio card. Renders the same markup the original HTML used,
 * driven by data from data/portfolio.json so the list is fully dynamic.
 */
export default function PortfolioCard({ item }) {
  return (
    <div className="pc reveal" data-cat={item.cat}>
      <div className="pc-img">
        <img
          src={item.img}
          style={{ height: `${item.imgHeight}px` }}
          alt={item.alt}
        />
        <div className="pc-overlay">
          <a href={item.link} target="_blank" rel="noreferrer" className="ov-link">
            View Project{' '}
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
      <div className="pc-body">
        <div className="pc-tags">
          {item.tags.map((t) => (
            <span key={t} className="ptag">
              {t}
            </span>
          ))}
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="pc-foot">
          {item.hasMeta ? (
            <div className="pc-meta">
              <span className="pc-year">{item.year}</span>
            </div>
          ) : (
            <span className="pc-year">{item.year}</span>
          )}
          <div className="pc-arr">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
