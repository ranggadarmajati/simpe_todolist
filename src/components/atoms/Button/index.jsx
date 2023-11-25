import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';

const Button = ({ onClick, title, type, disabled, loading, size }) => {
	return (
		<AntButton type={type} onClick={onClick} disabled={disabled} loading={loading} size={size}>
			{title}
		</AntButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	size: PropTypes.string.isRequired,
};

export default Button;