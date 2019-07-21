import AddColorForm from "./AddColorForm"
import {v4} from 'uuid'
import React from 'react'


class MemberList extends React.Component {
    constructor() {
        super()
        this.state = {
            members: [],
            loading: false,
            error: null,
        }
    }

    componentWillMount() {
        this.setState({loading: true})
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
            },
            error => {
                this.setState({error, loading: false})
            }
        );
    }

    componentWillupdate() {
        console.log('updating lifecycle');
    }

    render() {

    }
}

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response).results):
        reject(Error(request.statusText))
    request.onerror = error => rejects(error)
    request.send()
})

const Member = ({email, picture, name, location}) =>
    <div className="member">
        <img src={picture.thumbnail} alt="" />
        <h1>{name.first} {name.last}</h1>
        <p><a href={"mailto:" + email}>{email}</a></p>
        <p>{location.city}, {location.state}</p>
    </div>

const Color = ({title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
             style={{backgroundColor: color}}>
        </div>
        <div>
            <StarRating key={color.id} {...color} onRate={{onRate}}/>
        </div>
    </section>

const ColorList = ({colors = [], onRate=f=>f, onRemove=f=>f}) =>
    <div className="color-list">
        {(0 === colors.length) ?
            <p>No Colors Listed. (Add Color) {colors.length}</p>:
            colors.map(color =>
            <Color key={color.id} {...color}
                onRate={(rate) => onRate(color.id, rating)}
                   onRemove={() => onRemove(color.id)} />
            )
        }
    </div>

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        console.log(title, color)
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            ( color.id !== id) ?
                color:
                {
                    ...color,
                    rating
                }
        )
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )

        this.setState({colors})
    }

    render(){
        const {addColor} = this
        const {colors} = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor}/>
                <ColorList colors={colors} />
            </div>
        )
    }
}

export default App