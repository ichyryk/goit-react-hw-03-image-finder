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
