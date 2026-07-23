import Image from "next/image";

const logos = [
  { label: "Brand 01", src: "/socials/01.webp" },
  { label: "Brand 02", src: "/socials/02.webp" },
  { label: "Brand 03", src: "/socials/03.webp" },
  { label: "Brand 04", src: "/socials/04.webp" },
  { label: "Brand 05", src: "/socials/05.webp" },
  { label: "Brand 06", src: "/socials/06.webp" },
  { label: "Habeshlingo", src: "/socials/07.svg" },
];

function LogoList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="logoloop-list" role="list" {...(ariaHidden ? { "aria-hidden": true } : {})}>
      {logos.map((logo) => (
        <li key={`${logo.label}-${ariaHidden ? "dup" : "main"}`} className="logoloop-item">
          <Image
            className="logoloop-logo"
            width={200}
            height={80}
            src={logo.src}
            alt={ariaHidden ? "" : logo.label}
            loading="lazy"
            sizes="200px"
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
