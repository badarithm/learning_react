import React from 'react';
import ReactDom from 'react-dom';
import {render} from 'react-dom';
import Menu from './Menu';
import data from './data/recipes';
import Summary from "./Summary";

window.React = React;

render(
    <Summary />,
    document.getElementById('react-container')
);

// render(
//     <Menu recipes={data} />,
//     document.getElementById('react-container')
// );

// ReactDom.render(
//     <div>{title}</div>,
//     document.getElementById('app')
// );
//
// module.hot.accept();