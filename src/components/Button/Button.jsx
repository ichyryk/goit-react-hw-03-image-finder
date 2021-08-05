import s from './Button.module.css';

export const Button = ({ onClick, ...allyProps }) => {
  return (
    <button className={s.Button} type="button" onClick={onClick} {...allyProps}>
      <span>Load more</span>
    </button>
  );
};
