import React from 'react'
import NextImage from 'next/image'

type PropType = {
  src: string
  alt: string
  className?: string
  height?: number
  width?: number
  // layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
  // objectFit?: any,
  // objectPosition?: string
}

const Image = (props: PropType) => {
  const {src, alt, height, width, className} = props

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      priority={true}
      height={height}
      width={width}
      // layout={layout}
      // objectFit={objectFit}
      // objectPosition={objectPosition}
    />
  )
}

export default Image
