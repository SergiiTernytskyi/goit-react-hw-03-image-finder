import { Item, Picture } from './ImageGalleryItem.styled';

export const ImageGalleyItem = ({ image }) => {
  return (
    <Item>
      <Picture src={image.webformatURL} alt={image.tags} />
    </Item>
  );
};
