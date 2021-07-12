import PropTypes from 'prop-types';
import {Message, Icon} from './Notification.styles'

const Notification = ({ message, icon="🤷" }) => {
  return <Message>
            {message}   ...
            <Icon>
              {icon}
            </Icon>
          </Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default Notification;