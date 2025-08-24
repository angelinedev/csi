import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function ElectricBorderCard({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg p-[1px] transition-all duration-300',
        '[&>div]:hover:animate-spin-slow'
      )}
    >
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <Card
        className={cn('relative rounded-lg glassmorphic h-full', className)}
        {...props}
      >
        {children}
      </Card>
    </div>
  );
}
