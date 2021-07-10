import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptions.styles';
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from "react-icons/ri";

const FeedbackOptions = ({onChangeStatistics}) => (
    <Options>
        <Button
            onClick={onChangeStatistics}
            name="good">
            <RiEmotionHappyLine size="30" color="#00FF00"/>
            good
        </Button>
        <Button
            onClick={onChangeStatistics}
            name="neutral">
            <RiEmotionNormalLine size="30" color="#FFD700" />
            neutral
        </Button>
        <Button
            onClick={onChangeStatistics}
            name="bad">
            <RiEmotionUnhappyLine size="30" color="#ff0000" />
            bad
        </Button>
    </Options>
)

FeedbackOptions.propTypes = {
    onChangeStatistics: PropTypes.func.isRequired,
}

export default FeedbackOptions;