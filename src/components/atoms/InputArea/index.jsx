import PropTypes from 'prop-types'
import { Input as AntInput } from 'antd';
const { TextArea } = AntInput;

const InputArea = ({placeholder, allowClear = true, onChange, name}) => {
    return (
        <TextArea placeholder={placeholder} allowClear={allowClear} onChange={onChange} name={name} />
    )
}

InputArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    allowClear: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
}

export default InputArea