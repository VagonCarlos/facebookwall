// Core
import React, { Component } from 'react';
import moment from 'moment';

// Components
import { Consumer } from 'components/HOC/withProfile'

//Insruments
import Styles from './styles.m.css';


export default class Post extends Component {
    render () {
        const {
            currentUserFirstName,
            currentUserLastName,
            avatar,
        } = this.props;

        return (
            <Consumer>
                {(context) =>
                    <section className = { Styles.post }>
                        <img src = { context.avatar } />
                        <a>{`${ context.currentUserFirstName } ${ context.currentUserLastName }`}</a>
                        <time>{moment().format('MMMM D h:ss a')}</time>
                        <p>Howdy!</p>
                    </section>
                }
            </Consumer>
            
        );
    }
}
