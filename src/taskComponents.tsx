// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { Component, PureComponent, useEffect } from "react";
import { IUser, IProps } from "./interface";

export const FirstComponent = ({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
};
export const SecondComponent = ({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated");
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
};

export class ThirdComponent extends Component<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps === this.props;
  // }
  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
