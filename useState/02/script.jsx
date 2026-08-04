function Switch() {
  const [isActive, setIsActive] = React.useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  const className = `root ${isActive ? "on" : "off"}`;
  return (
    <div className={className}>
      <div className={"sideWall"}>
        <button className={"button"} onClick={handleClick} />
      </div>
      <div className={"catWrap"}>
        <div className={"bubble"} />
        <div className={"wall"} />
        <div className={"floor"} />
        <div className={"cat"} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Switch />);

// компонент с использованием состояния
class SwitchWithState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `root ${this.state.isActive ? "on" : "off"}`;

    return (
      <div className={className}>
        <div className={"sideWall"}>
          <button className={"button"} onClick={this.handleClick} />
        </div>
        <div className={"catWrap"}>
          <div className={"bubble"} />
          <div className={"wall"} />
          <div className={"floor"} />
          <div className={"cat"} />
        </div>
      </div>
    );
  }
}
