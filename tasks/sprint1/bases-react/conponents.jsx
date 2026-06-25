function UserGreeting(props) {
    return <h1>Здравствуйте, {props.fullNmae}</h1>
}

// или в виде стрелочной функции
const UserGreeting1 = (props) => {
    return <h1>Здравствуйте, {props.fullNmae}</h1>
}

// еще компактнее
const UserGreeting2 = props => <h1>Здравствуйте, {props.fullNmae}</h1>

class UserGreeting3 extends React.Component {
    render(){
        return <h1>Здравствуйте, {this.props.fullNmae}</h1>
    }
}