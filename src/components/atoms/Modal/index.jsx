import PropTypes from 'prop-types'
import { Modal as AntModal } from 'antd'

const Modal = ({children, title, open, onOk, onCancel}) => {
    return (
        <AntModal title={title} open={open} onOk={onOk} onCancel={onCancel}  footer={false}>
            {children}
        </AntModal>
    )
}
Modal.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
export default Modal