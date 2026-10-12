import { Loader2 } from "lucide-react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#4F46E5] hover:bg-indigo-700 text-white focus-visible:ring-[#4F46E5] dark:bg-[#818CF8] dark:hover:bg-indigo-400 dark:text-[#0F172A]",

    secondary:
      "bg-transparent border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-100/80 focus-visible:ring-slate-400 dark:border-[#334155] dark:text-[#F8FAFC] dark:hover:bg-slate-800",

    danger:
      "bg-[#DC2626] hover:bg-red-700 text-white focus-visible:ring-[#DC2626] dark:bg-[#F87171] dark:hover:bg-red-400 dark:text-[#0F172A]",

    ghost:
      "bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-slate-800/70",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}

      {children}

      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
