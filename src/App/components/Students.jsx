/* eslint-disable react/no-unused-state,react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import '../../style/students.scss';

class Students extends React.Component {
  state = {
    students: [],
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
    const addStudent = () => {
      if (this.state.inputDisplay) {
        return (
          <input
            className="add-student-input"
            value={this.state.name}
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
