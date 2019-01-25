import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
        return ( 
            <header className="uk-margin" uk-margin="true">
                <h1 className="uk-text-center">{props.titulo}</h1>
            </header>
         );
    
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;