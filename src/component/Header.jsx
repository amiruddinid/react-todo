import React, {Component} from 'react';
import style from '../App.module.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={style['App-header']}>
                <p>Hello World</p>
                <button className={style.button}>Hello Button</button>
            </header>
        )
    }
}