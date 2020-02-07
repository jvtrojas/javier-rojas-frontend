import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const BasePage = (props) => {
    const   children    = props.children,
             className  = props.className || '';
    return (
        <div className={`base-page ${className}`}>
            {/* <Container> */}
                {children}
            {/* </Container> */}
        </div>
    )
}

BasePage.defaultProps = {
    className: ''
} 

BasePage.propTypes = {
    className: PropTypes.string.isRequired
}

export default BasePage;