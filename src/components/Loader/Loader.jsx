import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export const GalleryLoader = () => {
  return (
    <div className={s.loader}>
      <Loader type="Rings" color="#00BFFF" height={300} width={300} />
    </div>
  );
};
