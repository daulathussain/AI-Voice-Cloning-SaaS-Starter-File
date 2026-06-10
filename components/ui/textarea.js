import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-xl border border-brand-300/15 bg-alien-bg px-4 py-3 text-sm text-brand-300/90 placeholder:text-brand-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/30 focus-visible:border-brand-300/40 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors font-body',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
