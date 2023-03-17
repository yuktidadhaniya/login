import React, { Component } from 'react';
import Modal from './Modal/Modal';
import './App.css';
import axios from '../src/axios-details';
import { connect } from 'react-redux';
import Redux from './redux';
import * as actionCreators from '../src/store/action/index';
class App extends Component {
  // state = {
  //   details: {
  //     name: '',
  //     age: '',
  //   },
  // };
  constructor() {
    super();
    this.state = { value: '' };

    this.state = {
      show: false,
      // userList: [],
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    console.log(this.props);

    this.props.onFetchOrders();
    this.props.onAddList();
    // this.props.lists;
    // const data = this.props.lists;

    // axios
    //   .get('data.json')
    //   .then((response) => {
    //     console.log('response', response);
    //     const fetchedOrders = [];
    //     for (let key in response.data) {
    //       console.log('key', key);
    //       fetchedOrders.push({
    //         ...response.data[key],
    //         id: key,
    //       });
    //     }

    // console.log('response.data', fetchedOrders);
    //   this.setState({ userList: fetchedOrders });
    // })
    // .catch((error) => {
    //   this.setState({ error: true });
    // });
  }

  hideModal = (dataList) => {
    console.log(dataList);
    // const data = {
    //   name: user.name,
    //   age: user.age,
    // };

    // console.log('user', user);
    // const result = this.state.userList;
    // result.push(user);
    // console.log('result', result);

    this.setState({ show: false });
    // this.setState({ userList: [...result] });
    // axios
    //   .post('/data.json', data)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    // this.setState({ user: [result] });
    // this.setState({ user: [...this.state.result, userList] });
    // const updated = {
    //   ...this.state.result,
    // };
    // updated[userList] = result;
  };

  deleteHandler = () => {
    axios.delete('data.json').then((response) => {
      console.log(response);
      console.log(response.data);
    });
  };

  render() {
    // const { userList } = this.state;
    // const { lists } = this.props.lists;
    // console.log('userList', userList);
    return (
      <>
        <h1 align="center">Add Student Detail</h1>

        <button type="button" onClick={this.showModal} className="btn">
          Add
        </button>

        <button type="button" className="btn" onClick={this.deleteHandler}>
          Delete
        </button>

        <div className="App">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>

            {this.props.datalist > 0
              ? this.props.datalist.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                    </tr>
                  );
                })
              : 'No Student'}
          </table>
        </div>
        <main>
          <Modal show={this.state.show} handleAdd={this.hideModal}></Modal>
        </main>
        <Redux />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state.................app', state);
  return {
    datalist: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actionCreators.fetchLists()),
    onAddList: () => dispatch(actionCreators.addList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
