export default function ComputerIcon() {
  return (
    <div className="mt-6 flex items-center">
      <div className="mx-auto md:mx-0 rounded-2xl px-5 py-4 shadow-[0_14px_34px_rgba(40,60,100,0.10)]"
           style={{ background: "rgb(var(--bg1))" }}>
        <svg
          width="140" height="96" viewBox="0 0 140 96"
          fill="none" stroke="rgb(var(--accent))" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <rect x="10" y="10" width="120" height="76" rx="16"></rect>
          <rect x="26" y="24" width="88" height="48" rx="12"></rect>
          <circle cx="70" cy="48" r="14"></circle>
          <path d="M78 40l-8 8 8 8M62 40l8 8-8 8"></path>
          <path d="M40 86h60"></path>
        </svg>
      </div>
    </div>
  );
}
