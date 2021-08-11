import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};
