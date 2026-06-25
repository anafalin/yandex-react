class Page extends React.Component {
  render() {
    return (
      <div className={`app ${this.props.img}`}>
        <h1 className="app__greeting">{this.props.greeting}</h1>
      </div>
    );
  }
}

class CurrentTime extends React.Component {
  render() {
    let currentHour = new Date().getHours();
    let img = "";
    let greeting = "";
    
    if (currentHour >= 4 && currentHour < 12) {
      img = "motning";
      greeting = "Доброе утро";
    } else if (currentHour >= 12 && currentHour < 16) {
      img = "aafternoon";
      greeting = "Добрый день";
    } else if (currentHour >= 16 && currentHour < 23) {
      img = "evening";
      greeting = "Добрый вечер";
    } else {
      img = "night";
      greeting = "Доброй ночи";
    }

    return <Page img={img} greeting={greeting} />;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<CurrentTime />);
