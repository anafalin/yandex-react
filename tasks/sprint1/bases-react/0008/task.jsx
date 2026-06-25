class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="table__text">{this.props.children}</li>;
  }
}

class List extends React.Component {
  render() {
    return (
      <section className="table">
        <h1 className="table__title">
          Игроки киберспортивной команды <span className="table__span">NaVi</span>
        </h1>
        <ol className="table__content">
          <Player children = 'b1t'/>
          <Player children = 's1mple'/>
          <Player children = 'electronic'/>
          <Player children = 'sdy'/>
          <Player children = 'Perfecto'/>
        </ol>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#team-container'));
root.render(<List />);