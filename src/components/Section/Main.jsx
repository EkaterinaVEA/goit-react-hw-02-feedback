import PropTypes from 'prop-types';
import { Section } from './Section.styles'

const Main = ({ children }) => {
    return (
        <Section>
            {children}
        </Section>
    )

}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;