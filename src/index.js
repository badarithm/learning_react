import {React} from 'react';
import ReactDom from 'react-dom';
import {render} from 'react-dom';
import Menu from './Menu';
import data from './data/recipes';
import Summary from "./Summary";
import AddColorForm from "./AddColorForm";
import StarRating from './StarRating';
import App from './App';

window.React = React;

const logColor = (title, color) =>
    console.log(`New Color ${title} | ${value}`)

const colors = {
    colors: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
};
console.log(colors);
console.log({...colors});
// <StarRating totalStars={7} starsSelected={3}/>,
render(
    <App {...colors}/>,
    document.getElementById('react-container')
);
//
// render(
//     <AddColorForm onNewColor={(title, color) => {
//         console.log(`TODO: add new ${title} and ${color} to the list.`);
//         console.log(`TODO: render UI with new Color`);
//     }} />,
//     document.getElementById('react-container')
// );
//
// render(
//    <Summary />,
//     document.getElementById('react-container')
// );

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