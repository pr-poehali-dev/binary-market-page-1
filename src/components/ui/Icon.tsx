
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
  fallback?: IconName;
}

const Icon = ({ name, size = 24, className, fallback = 'CircleAlert', ...props }: IconProps) => {
  // Check if the requested icon exists in lucide-react
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found.`);
    return null;
  }

  return <IconComponent size={size} className={cn(className)} {...props} />;
};

export default Icon;
