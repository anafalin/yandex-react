const element = React.createElement(
  "div",
  {className: "main"},
  React.createElement("h1", null, "Добро пожаловать на борт!")
);

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(element);