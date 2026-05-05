export default function OptimizedImage({
  image,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      style={{ objectPosition: image.position }}
    />
  );
}
