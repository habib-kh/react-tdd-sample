import PropTypes from 'prop-types';

const Button = (text, emitEvent) => {
  return <button></button>;
};

Button.propTypes = {
  text: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
