import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css"

const Footer = () =>{
        return(
            <footer>
            <div className="titulo1">
              <p>© 2024 - Hecho por Santiago M.C</p>
              <div className="redes-footer">
                <a
                  href="https://www.facebook.com/santiago.munoz232"
                  target="_blank noopener noreferrer"
                >
                  <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} /></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-munoz-283456179/"
                  target="blank noopener noreferrer"
                >
                   <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} /></i>
                </a>
                <a href="https://github.com/SanM69xXx"
                target="_blank noopener noreferrer">
                  <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} /></i>
                </a>
              </div>
            </div>
          </footer>
        )
}

export default Footer