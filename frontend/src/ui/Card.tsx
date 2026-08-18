import { type ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => (
  <div className="rounded-3xl border border-surface/80 bg-surface p-6 shadow-card">
    {title ? (
      <h2 className="mb-4 text-xl font-semibold text-primary">{title}</h2>
    ) : null}
    {children}
  </div>
);

export default Card;
