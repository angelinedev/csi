import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlowingCard({ className, children, ...props }: CardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <Card
        className={cn(
          'relative rounded-lg glassmorphic transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </div>
  );
}
