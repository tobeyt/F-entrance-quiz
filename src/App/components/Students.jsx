/* eslint-disable react/no-unused-state,react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import '../../style/students.scss';

class Students extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/students').then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }

  render() {
    return (
      <section className="student-list">
        <h2>学员列表</h2>
        <main className="main-list">
          {this.state.students.map((cur, index) => {
            return <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>;
          })}
        </main>
      </section>
    );
  }
}

export default Students;
