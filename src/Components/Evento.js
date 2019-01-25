import React from 'react';
import PropTypes from 'prop-types';

const Evento = (props) => {

    const {name} = props.info;
    if(!name) return null;

    let desc = props.info.description.text;
    if(desc.length > 250) {
        desc = desc.substr(0,200);
    }

    return ( 
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {props.info.logo !== null ?
                    <img src={props.info.logo.url} alt={props.info.name.text}/>
                     : ''   
                }
                </div>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">
                    {props.info.name.text}
                </h3>
                <p>{desc}</p>
            </div>
            <div className="uk-card-footer">
                <a className="uk-button uk-button-secondary" href={props.info.url} target="_blank">
                    More Info
                </a>
            </div>
        </div>
     );
}

Evento.propTypes = {
    info : PropTypes.object.isRequired
}

export default Evento;