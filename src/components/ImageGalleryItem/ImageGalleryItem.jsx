import PropTypes from 'prop-types';

import { Item, Picture } from './ImageGalleryItem.styled';

export const ImageGalleyItem = ({ image, openModal }) => {
  return (
    <Item>
      <Picture
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => {
          openModal(image);
        }}
      />
    </Item>
  );
};

ImageGalleyItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
