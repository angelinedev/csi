import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlowingCard({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-lg transition-all duration-300',
        'shadow-md hover:shadow-2xl hover:shadow-primary/20',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-accent/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </Card>
  );
}
