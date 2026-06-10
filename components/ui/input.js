import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-xl border border-brand-300/15 bg-alien-bg px-4 py-2 text-sm text-brand-300/90 placeholder:text-brand-300/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/30 focus-visible:border-brand-300/40 disabled:cursor-not-allowed disabled:opacity-50 font-body',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
