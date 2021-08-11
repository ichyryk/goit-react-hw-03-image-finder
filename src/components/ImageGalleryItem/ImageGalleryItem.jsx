import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  id,
  tags,
  largeImageURL,
  handleImageClick,
}) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={() => {
          handleImageClick(largeImageURL, tags);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  handleImageClick: PropTypes.func,
};
