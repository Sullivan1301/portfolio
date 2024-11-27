'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { icons } from '@/utils/iconPaths';

export default function AnimatedIcon({ 
  section, 
  name, 
  size = 24, 
  className = '',
  animate = true,
  onClick
}) {
  const iconPath = icons[section]?.[name];

  if (!iconPath) {
    console.warn(`Icon not found: ${section}/${name}`);
    return null;
  }

  const IconWrapper = animate ? motion.div : 'div';

  return (
    <IconWrapper
      whileHover={animate ? { scale: 1.1 } : undefined}
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <Image
        src={iconPath}
        alt={`${name} icon`}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </IconWrapper>
  );
} 