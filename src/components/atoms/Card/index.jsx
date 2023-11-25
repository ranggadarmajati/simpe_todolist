import PropTypes from 'prop-types'
import { Card as AntCard, Tooltip } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Card = ({ title, description, onClickEdit, onClickDelete }) => {
    return (
        <AntCard type='inner' title={title} size="small"
          actions={[
            <Tooltip placement="top" title={'Edit'} key={'edit'}><EditOutlined key="edit" onClick={onClickEdit} /></Tooltip>,
            <Tooltip placement="top" title={'Delete'} key={'delete'}><DeleteOutlined key="delete" onClick={onClickDelete} /></Tooltip>,
          ]}
        >
          <p>{description}</p>
        </AntCard>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}
export default Card;