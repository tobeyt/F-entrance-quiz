/* eslint-disable react/no-unused-state,react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import '../../style/students.scss';

class Students extends React.Component {
  state = {
    students: [],
    // TODO 这个name是否可以省略？
    name: '',
    inputDisplay: false,
  };

  componentDidMount() {
    this.getAllStudents();
  }

  getAllStudents = () => {
    axios.get('http://localhost:8080/students').then((res) => {
      this.setState({
        students: res.data,
      });
    });
  };

  // TODO 是否可以省略？
  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  displayInput = () => {
    this.setState({ inputDisplay: true });
  };

  addNewStudent = (keyCode) => {
    if (keyCode === 13) {
      axios
        .post(`http://localhost:8080/student/${this.state.name}`)
        .then(() => this.getAllStudents());
      this.setState({
        name: '',
        inputDisplay: false,
      });
    }
  };

  render() {
    // TODO 这个按钮可以单独抽出成一个组件
    const addStudent = () => {
      // TODO 这里使用三元判断优化写法
      if (this.state.inputDisplay) {
        return (
          // TODO 这里要是做的完备的话，需要点击后自动focus
          <input
            className="add-student-input"
            value={this.state.name}
            // TODO 同理，这个也可以省略
            onChange={(e) => this.handleInputChange(e)}
            onKeyUp={() => this.addNewStudent(event.keyCode)}
          />
        );
      }
      return (
        <p className="add-student" onClick={() => this.displayInput()}>
          +添加学员
        </p>
      );
    };
    return (
      <section className="student-list">
        <h2>学员列表</h2>
        <main className="main-list">
          {this.state.students.map((cur, index) => {
            return <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>;
          })}
          {addStudent()}
        </main>
      </section>
    );
  }
}

export default Students;
