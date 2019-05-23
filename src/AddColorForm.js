import { Component } from 'react';

const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color

    const submit = event => {
        event.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return(
        <form onSubmit={event => event.preventDefault()}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required />
            <input ref={input => _color = input}
                   type="color" required />
            <button>ADD</button>
        </form>
    )
}


// class AddColorForm extends Component {
//
//     constructor(props) {
//         super(props);
//         this.submit = this.submit.bind(this);
//     }
//
//     submit(event) {
//         const {_title, _color} = this.refs;
//         // event.preventDefault();
//         this.props.onNewColor(_title.value, _color.value);
//         alert(`New Color: ${_title.value} ${_color.value}`);
//         _title.value = '';
//         _color.value = '#000000';
//         _title.focus();
//     }
//
//     render() {
//         return(
//             <form onSubmit={event => event.preventDefault()}>
//                 <input ref="_title"
//                        type="text"
//                        placeholder="color title..." required />
//                 <input ref="_color"
//                        type="color" required />
//                 <button>ADD</button>
//             </form>
//         )
//     }
// }

export default AddColorForm;