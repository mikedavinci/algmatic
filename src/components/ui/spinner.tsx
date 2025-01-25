import { Loader2, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpinnerProps extends Omit<LucideProps, 'ref'> {
  size?: number;
}

export function Spinner({ className, size = 16, ...props }: SpinnerProps) {
  return (
    <Loader2 className={cn('animate-spin', className)} size={size} {...props} />
  );
}
