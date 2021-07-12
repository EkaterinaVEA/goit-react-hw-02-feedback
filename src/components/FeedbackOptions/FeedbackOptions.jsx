import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Options, Item } from './FeedbackOptions.styles';


const FeedbackOptions = ({ options, onChangeStatistics }) => {
    options = Object.keys(options);

    return (
        <Options>
            {options.map((option) => (
                <Item key={option}>
                <Button feedback={option} onClick={onChangeStatistics} />
                </Item>
            ))}
        </Options>
    );
}


FeedbackOptions.propTypes = {
    onChangeStatistics: PropTypes.func.isRequired,
    options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
}

export default FeedbackOptions;