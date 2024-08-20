export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6 14.6667V8.00004H10V14.6667M2 6.00004L8 1.33337L14 6.00004V13.3334C14 13.687 13.8595 14.0261 13.6095 14.2762C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2762C2.14048 14.0261 2 13.687 2 13.3334V6.00004Z"
          stroke="#A1A1AA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#E4E4E7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Dashboard</p>
    </div>
  );
}
