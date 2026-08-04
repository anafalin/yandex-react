import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = {
  addressType: "home",
  city: "",
  street: "",
  zipCode: "",
  houseNumber: "",
  building: "",
  toDoor: true,
  entrance: "",
  floor: "",
  apartment: "",
  info: "",
};

export default function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const onChange = (e) => {
    console.log(state);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Отправленные данные:", state);
    setState(INITIAL_STATE);
  };

  return (
    <div className="App">
      <h2 className="mb25">Укажите адрес доставки</h2>
      <form onSubmit={submit}>
        <div className="field mb25">
          <select onChange={onChange} value={state.addressType}>
            <option value="home">Дом</option>
            <option value="work">Работа</option>
            <option value="other">Другое</option>
          </select>
          <label className="label">Тип адреса</label>
        </div>
        <div className="field mb25">
          <input
            onChange={onChange}
            type="text"
            name="city"
            value={state.city}
            placeholder="Введите название города"
          />
          <label className="label">Город</label>
        </div>
        <div className="field mb25">
          <input
            onChange={onChange}
            type="text"
            name="street"
            value={state.street}
            placeholder="Введите название улицы"
          />
          <label className="label">Улица</label>
        </div>
        <div className="field__group mb25">
          <div className="field field_min">
            <input
              onChange={onChange}
              value={state.zipCode}
              type="number"
              name="zipCode"
            />
            <label className="label">Индекс</label>
          </div>
          <div className="field field_min">
            <input
              onChange={onChange}
              value={state.houseNumber}
              type="number"
              name="houseNumber"
            />
            <label className="label">Дом</label>
          </div>
          <div className="field field_min">
            <input
              onChange={onChange}
              value={state.building}
              type="building"
              name="building"
            />
            <label className="label">Корпус</label>
          </div>
        </div>
        <div className="checkbox-container mb25">
          <input
            onChange={onChange}
            type="checkbox"
            name="toDoor"
            checked={state.toDoor}
            id="toDoor"
          />
          <label className="to-door-label">Требуется доставка до двери</label>
        </div>

        {state.toDoor && (
          <>
            <div className="field__group mb25">
              <div className="field field_min">
                <input
                  onChange={onChange}
                  value={state.entrance}
                  type="number"
                  name="entrance"
                />
                <label className="label">Подъезд</label>
              </div>
              <div className="field field_min">
                <input
                  onChange={onChange}
                  value={state.floor}
                  type="number"
                  name="floor"
                />
                <label className="label">Этаж</label>
              </div>
              <div className="field field_min">
                <input
                  onChange={onChange}
                  value={state.apartment}
                  type="number"
                  name="apartment"
                />
                <label className="label">Квартира</label>
              </div>
            </div>
            <div className="field mb25">
              <textarea
                onChange={onChange}
                name="info"
                rows="4"
                value={state.info}
                placeholder="Код домофона, как пройти"
              />
              <label className="label">Дополнительная информация</label>
            </div>
          </>
        )}
        <button type="submit">Сохранить адрес</button>
      </form>
    </div>
  );
}
