import PropTypes from 'prop-types';
import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';
import { Item, Picture } from './ImageGalleryItem.styled';

export class ImageGalleyItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <Item>
          <Picture
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal}
          />
        </Item>
        {showModal && <Modal image={image} onClose={this.toggleModal} />}
      </>
    );
  }
}
