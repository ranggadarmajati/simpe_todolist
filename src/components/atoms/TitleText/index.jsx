import { Typography } from 'antd';
import PropTypes from 'prop-types';
const { Title } = Typography;

const TitleText = ({ text, type, level }) => {
	return (
		<Title type={type} level={level}>
			{text}
		</Title>
	);
};

TitleText.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
};

export default TitleText;