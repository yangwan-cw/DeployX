import type { CSSProperties } from 'react'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
type ImageShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl'

interface DocsImageProps {
  src: string
  alt: string
  caption?: string
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  radius?: ImageRadius
  shadow?: ImageShadow
  border?: boolean
  zoom?: boolean
  className?: string
  imgClassName?: string
}

const radiusClass: Record<ImageRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

const shadowClass: Record<ImageShadow, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

function toSize(value: number | string | undefined) {
  return typeof value === 'number' ? `${value}px` : value
}

export function DocsImage({
  src,
  alt,
  caption,
  width = '100%',
  height,
  maxWidth = '100%',
  radius = 'lg',
  shadow = 'md',
  border = true,
  zoom = true,
  className = '',
  imgClassName = '',
}: DocsImageProps) {
  const figureStyle: CSSProperties = {
    width: toSize(width),
    maxWidth: toSize(maxWidth),
  }

  const imageStyle: CSSProperties = {
    height: toSize(height),
  }

  const image = (
    <img
      alt={alt}
      className={[
        'block w-full bg-fd-muted object-cover',
        radiusClass[radius],
        shadowClass[shadow],
        border ? 'border' : '',
        zoom ? 'cursor-zoom-in' : '',
        imgClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      src={src}
      style={imageStyle}
    />
  )

  return (
    <figure className={`not-prose my-8 ${className}`} style={figureStyle}>
      {zoom ? (
        <ImageZoom
          alt={alt}
          height={1}
          src={src}
          width={1}
          zoomInProps={{
            alt,
          }}
        >
          {image}
        </ImageZoom>
      ) : (
        image
      )}
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
