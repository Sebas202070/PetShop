import Image from 'next/image';

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
  width: number;
  height: number;
  onmouseEnter?: ()=> void
  onmouseLeave?: ()=> void
}

export const ProductImages = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  onmouseEnter,
  onmouseLeave,
  
}: Props) => {

  const localSrc = ( src ) 
    ? src.startsWith('http') // https://urlcompletodelaimagen.jpg
      ? src
      : `/${ src }`
    : '/placeholder.jpg';

  return (
    <Image
      src={ localSrc }
      width={ width }
      height={ height}
      alt={ alt }
      className={ className }
      style={ style }
      onMouseEnter={onmouseEnter}
      onMouseLeave={onmouseLeave}
    />
  );
};