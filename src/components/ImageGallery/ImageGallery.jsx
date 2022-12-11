import { ImageGalleyItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => {
        return <ImageGalleyItem key={image.id} image={image} />;
      })}
    </Gallery>
  );
};
