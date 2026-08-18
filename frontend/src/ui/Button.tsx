import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const variantStyles =
      variant === 'secondary'
        ? 'bg-slate-900/80 text-slate-100 ring-1 ring-white/10 hover:bg-slate-900/95'
        : 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-[0_20px_70px_rgba(168,85,247,0.22)] hover:opacity-95';

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variantStyles} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
