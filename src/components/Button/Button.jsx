import PropTypes from "prop-types";
import { Btn } from "./Button.styles";
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from "react-icons/ri";

const Button = ({ feedback, onClick }) => {
  return (
    <Btn type="button" data-feedback={feedback} onClick={onClick}>
      {feedback === "good" && (
        <RiEmotionHappyLine size="30" color="#00FF00" style={{ marginBottom: 5 }} />
      )}
      {feedback === "neutral" && (
        <RiEmotionNormalLine size="30" color="#FFD700" style={{ marginBottom: 5 }} />
      )}
      {feedback === "bad" && (
        <RiEmotionUnhappyLine size="30" color="#ff0000" style={{ marginBottom: 5 }} />
      )}
      {feedback}
    </Btn>
  );
};

Button.propTypes = {
  feedback: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;