const logos = [
  { label: "Brand 01", src: "/socials/01.png" },
  { label: "Brand 02", src: "/socials/02.png" },
  { label: "Brand 03", src: "/socials/03.png" },
  { label: "Brand 04", src: "/socials/04.png" },
  { label: "Brand 05", src: "/socials/05.png" },
  { label: "Brand 06", src: "/socials/06.png" },
];

function LogoList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="logoloop-list" role="list" {...(ariaHidden ? { "aria-hidden": true } : {})}>
      {logos.map((logo) => (
        <li key={`${logo.label}-${ariaHidden ? "dup" : "main"}`} className="logoloop-item">
          <img
            className="logoloop-logo"
            width={200}
            height={80}
            src={logo.src}
            alt={ariaHidden ? "" : logo.label}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoLoop() {
  return (
    <div className="logoloop" aria-label="Trusted by these clients">
      <div className="logoloop-track">
        <LogoList />
        <LogoList ariaHidden />
      </div>
    </div>
  );
}
