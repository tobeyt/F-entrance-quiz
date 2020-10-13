import React from 'react';
import axios from 'axios';
import '../../style/groups.scss';

class Groups extends React.Component {
  state = {
    groups: { group1: [], group2: [], group3: [], group4: [], group5: [], group6: [] },
  };

  componentDidMount() {
    axios.get('http://localhost:8080/groups').then((res) =>
      this.setState({
        groups: {
          group1: res.data['1 组'],
          group2: res.data['2 组'],
          group3: res.data['3 组'],
          group4: res.data['4 组'],
          group5: res.data['5 组'],
          group6: res.data['6 组'],
        },
      })
    );
  }

  randomGroups = () => {
    axios.get('http://localhost:8080/random').then((res) => {
      console.log(res);
      this.setState({
        groups: {
          group1: res.data['1 组'],
          group2: res.data['2 组'],
          group3: res.data['3 组'],
          group4: res.data['4 组'],
          group5: res.data['5 组'],
          group6: res.data['6 组'],
        },
      });
      console.log(this.state.groups);
    });
  };

  render() {
    return (
      <section className="groups">
        <header className="header">
          <h2>分组列表</h2>
          <button className="random-group" onClick={() => this.randomGroups()}>
            分组学员
          </button>
        </header>
        <main>
          <div className="group">
            <h3 className="group-name">1 组</h3>
            <div className="group-content">
              {this.state.groups.group1.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
          <div className="group">
            <h3 className="group-name">2 组</h3>
            <div className="group-content">
              {this.state.groups.group2.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
          <div className="group">
            <h3 className="group-name">3 组</h3>
            <div className="group-content">
              {this.state.groups.group3.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
          <div className="group">
            <h3 className="group-name">4 组</h3>
            <div className="group-content">
              {this.state.groups.group4.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
          <div className="group">
            <h3 className="group-name">5 组</h3>
            <div className="group-content">
              {this.state.groups.group5.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
          <div className="group">
            <h3 className="group-name">6 组</h3>
            <div className="group-content">
              {this.state.groups.group6.map((cur, index) => (
                <p className="student" key={index}>{`${cur.id}. ${cur.name}`}</p>
              ))}
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Groups;
