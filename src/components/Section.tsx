interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section
      className={`w-screen h-screen flex-shrink-0 flex items-center justify-center p-16 ${className}`}
    >
      <div className="max-w-4xl text-center">
        {children}
      </div>
    </section>
  );
}
