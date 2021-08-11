import PropTypes from 'prop-types';
import s from './Button.module.css';

export const Button = ({ onClick, ...allyProps }) => {
  return (
    <button className={s.Button} type="button" onClick={onClick} {...allyProps}>
      <span>Load more</span>
    </button>
  );
};

Button.defaultProps = {
  onCLick: () => null,
};

Button.propTypes = {
  onCLick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
