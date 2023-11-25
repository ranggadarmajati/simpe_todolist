import PropTypes from 'prop-types'
import { Input as AntInput } from 'antd';

const Input = ({placeholder, allowClear = true, onChange, name}) => {
    return (
        <AntInput placeholder={placeholder} allowClear={allowClear} onChange={onChange} name={name} />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    allowClear: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
}

export default Input