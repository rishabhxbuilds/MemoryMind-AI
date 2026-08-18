const Logo = () => (
  <div className="relative flex h-9 w-9 items-center justify-center">
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
    >
      <defs>
        <linearGradient id="logoBrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {/* Left hemisphere - organic curves */}
      <path
        d="M18 6C14 6 11 8 9.5 11C7.5 13 7 16 7.5 19C7 21 8 24 10 26C11.5 27.5 14 28.5 18 29V6Z"
        fill="url(#logoBrainGrad)"
        fillOpacity="0.25"
        stroke="url(#logoBrainGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C14 14 16 13 18 15M10.5 19C12.5 18 15 20 18 20M13 25C15 24 16.5 25 18 26"
        stroke="url(#logoBrainGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Right hemisphere - cybernetic tech circuit nodes */}
      <path
        d="M18 6C22 6 25 8 26.5 11C28.5 13 29 16 28.5 19C29 21 28 24 26 26C24.5 27.5 22 28.5 18 29"
        stroke="url(#logoBrainGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="25" cy="12" r="1.5" fill="#f472b6" />
      <circle cx="28" cy="18" r="1.5" fill="#c084fc" />
      <circle cx="24" cy="24" r="1.5" fill="#38bdf8" />
      <circle cx="18" cy="11" r="1" fill="#fff" />
      <circle cx="18" cy="18" r="1" fill="#fff" />
      <circle cx="18" cy="25" r="1" fill="#fff" />

      {/* Circuit connecting lines */}
      <path
        d="M18 11H22L25 12M18 18H24L28 18M18 25H21L24 24"
        stroke="#c084fc"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Logo;
