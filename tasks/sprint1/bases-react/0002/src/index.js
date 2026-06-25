function resize() {
  const element = React.createElement(
    'div',
    {className: 'main'},
    React.createElement('h1', null, 'размер окна'),
    React.createElement('h1', null, 'в пикселях'),
    React.createElement('h2', null, `${window.innerHeight}px на ${window.innerWidth}px`)
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
}
resize(); // функция-обработчик события изменения размера окна

// Назначаем функцию обработчиком события
window.onresize = resize;

// window.onresize = resize;     // ✅ Правильно - передаём саму функцию
// window.onresize = resize();   // ❌ Неправильно - вызовет функцию сразу