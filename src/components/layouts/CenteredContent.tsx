import {cn} from '@/lib/utils'
import React from 'react'

const CenteredContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
    <div className={cn(['flex justify-center items-center', 'min-h-screen', className])} {...props}/>
  ),
)

CenteredContent.displayName = "CenteredContent"

export {
  CenteredContent
}
