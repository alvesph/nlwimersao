import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/9956837?s=460&u=d9bf8dfbca908161d1cbf4bbb0c91463ef888d8a&v=4" alt="Paulo H. Alves" />
            <div>
                <strong>Paulo H. Alves</strong>
                <span>Biologia</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptatum quo animi sint alias. 
            <br /><br />
            Rem repudiandae deserunt dolores architecto illo aliquid odit? Alias, qui obcaecati est consequuntur fuga eveniet sed.
        </p>

        <footer>
            <p>
                Preço/hora 
                <strong>R$ 25,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;