//const expect = require("expect");
import React from 'react';
import { Provider } from 'react-redux';
import allReducers from "../redux/reducers";
import { createStore } from "redux";
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App.js';
import games from '../../public/data.json';


describe("app test", () => {
  const store = createStore(allReducers, {games});
  it("should match snapshot", () => {
    const {container} = render(
      <Provider store={store}>
        <App />
      </Provider>)
    expect(container).toMatchSnapshot();
  });

  it("should change score value", () => {
    const newScore = 10;
    const {container, getByText, getByTestId} = render(
      <Provider store={store}>
        <App />
      </Provider>)
      const selectRef = container.querySelector("#formsel");
      fireEvent.change(selectRef, {
        target: {
          value: "9"
        }
      })
      fireEvent.change(getByTestId("puntuation"), {
        target: {
          value: newScore
        }
      })
      fireEvent(
        getByTestId("submit"), 
          new MouseEvent("click", {
          bubbles: true,
          cancelable: true
      }))
      expect(container).toMatchSnapshot();
  })

})


