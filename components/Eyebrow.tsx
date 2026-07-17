export default function Eyebrow({ number, children, end }: { number: string; children: React.ReactNode; end?: string }) {
  return (
    <div className="eyebrow reveal">
      <span className="num">{number}</span>
      {children}
      <span className="ind" />
      {end && <span className="end">{end}</span>}
    </div>
  );
}
