import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styles';
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from "react-icons/ri";
import {IoIosStats} from "react-icons/io";
import { FaBalanceScale } from "react-icons/fa";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
<List>
        <Item>
                Good:{good}
                <RiEmotionHappyLine size="25" color="#00FF00"/>
        </Item>
        <Item>
                Neutral:{neutral}
                <RiEmotionNormalLine size="25" color="#FFD700" />
        </Item>
        <Item>
                Bad:{bad}
                <RiEmotionUnhappyLine size="25" color="#ff0000" />
        </Item>
        <Item>
                Total:{total}
                <IoIosStats size="25" color="#32CD32" />
        </Item>
        <Item>
                Positive feedback:{positivePercentage}%
                <FaBalanceScale size="25" color="#B8860B" />
        </Item>
</List>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;