export default function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="font-display text-2xl font-semibold tracking-tight leading-none">
        Brachi
      </span>
    </span>
  );
}
