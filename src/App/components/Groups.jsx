import React from 'react';
import axios from 'axios';
import '../../style/groups.scss';

class Groups extends React.Component {
  state = {
    // TODO 分组组数和内容倾向后端返回而不是写死在前端
    groups: { group1: [], group2: [], group3: [], group4: [], group5: [], group6: [] },
  };

  componentDidMount() {
    // TODO api请求可以抽出api层，如建立src/utils/api这样把请求相关内容都放进去
    axios.get('http://localhost:8080/groups').then((res) =>
      this.setState({
        groups: {
          // TODO sort 内function抽象成一个compare方法，或者后端处理返回得到的就是需要展示的内容，前端不做排序处理（这个需求好像是扩展的）
          group1: res.data['1 组'].sort((a, b) => a.id - b.id),
          group2: res.data['2 组'].sort((a, b) => a.id - b.id),
          group3: res.data['3 组'].sort((a, b) => a.id - b.id),
          group4: res.data['4 组'].sort((a, b) => a.id - b.id),
          group5: res.data['5 组'].sort((a, b) => a.id - b.id),
          group6: res.data['6 组'].sort((a, b) => a.id - b.id),
        },
      })
    );
  }

  randomGroups = () => {
    // TODO 同上
    axios.get('http://localhost:8080/random').then((res) => {
      // TODO 重复代码需要抽象成方法
      this.setState({
        groups: {
          group1: res.data['1 组'].sort((a, b) => a.id - b.id),
          group2: res.data['2 组'].sort((a, b) => a.id - b.id),
          group3: res.data['3 组'].sort((a, b) => a.id - b.id),
          group4: res.data['4 组'].sort((a, b) => a.id - b.id),
          group5: res.data['5 组'].sort((a, b) => a.id - b.id),
          group6: res.data['6 组'].sort((a, b) => a.id - b.id),
        },
      });
    });
  };

  render() {
    return (
      <section className="groups">
        {/* TODO header这一块可以单独抽取成组件 */}
        <header className="header">
          <h2>分组列表</h2>
          <button className="random-group" onClick={() => this.randomGroups()}>
            分组学员
          </button>
        </header>
        <main>
          {/* TODO 同上，还是倾向于后端返回组数来进行展示，而不是前端写死 */}
          {/* TODO 优化抽取组件，里面还可以进一步抽取组件和复用，现在这个组件过长了 */}
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
