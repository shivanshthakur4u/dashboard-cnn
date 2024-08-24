import { cn } from 'src/lib/utils';
import React from 'react';

function Widget({ children, className = '' }) {
  return (
    <div className={cn('bg-white rounded-2xl p-3 h-52', className)}>
      {children}
    </div>
  );
}

export default Widget;
