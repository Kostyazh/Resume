import React, { Component } from 'react';
import s from '../Loading/Loading.module.css'
export default class Loading extends Component {
    render() {
        function time() {
            setTimeout(function () { document.getElementById("b").style.display = "none"; }, 4800);
        }
        time();

        const text = [
            "Hi, I'm frontend developer  \n",
            "and \n",
            "this page about me... \n"
        ];

        let line = 0;
        let count = 0;
        let result = '';
        function typeLine() {
            let interval = setTimeout(
                () => {
                    result += text[line][count]
                    document.querySelector('pre').innerHTML = result + '|';
                    count++;
                    if (count >= text[line].length) {
                        count = 0;
                        line++;
                        if (line == text.length) {
                            clearTimeout(interval);
                            document.querySelector('pre').innerHTML = result;
                            return true;
                        }
                    }
                    typeLine();
                }, getRandomInt(getRandomInt(250 * 1)))
        }
        typeLine();

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        return (
            <div id="b" className={s.loading}>
                <pre></pre>
            </div>
        );
    }
}