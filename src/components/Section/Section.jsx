import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styles';
import { VscFeedback, VscGraph } from "react-icons/vsc";

const Section = ({ children, title }) => {
    return (
        <Wrapper>
            {title && (
                <Title>
                    {title}
                    {title === "Please leave feedback" && <VscFeedback size="35"/>}
                    {title === "Statistics" && <VscGraph size="35" /> }
                </Title>
            )}

            {children}
        </Wrapper>
    );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;