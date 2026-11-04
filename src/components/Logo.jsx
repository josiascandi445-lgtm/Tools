export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo__mark" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="6" fill="#00E676" />
        <path d="M8 9h12M14 9v11" stroke="#0D0F12" strokeWidth="3" strokeLinecap="square" fill="none" />
      </svg>
      <span className="logo__text">
        Tools <span className="logo__accent">Art</span>
      </span>
    </span>
  );
}
