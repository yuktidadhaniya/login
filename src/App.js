import React, { Component } from 'react';
import Modal from './Modal/Modal';
import './App.css';
import { connect } from 'react-redux';

import * as actionCreators from '../src/store/action/index';
import Counter from './counter';

// import axios from '../src/axios-details';
class App extends Component {
  constructor() {
    super();
    this.state = { value: '', show: false, activeUser: '' };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    this.props.onFetchOrders();
  }

  hideModal = (data) => {
    if (this.state.isEdit) {
      this.props.editItem(data);
      this.setState({ show: false });
    } else {
      this.setState({ show: false });
      this.props.onAddList(data);
    }
    alert('successfully');
  };

  deleteHandler = () => {
    // axios.delete('data.json').then((response) => {});
  };

  RemoveEvent = (key) => {
    this.props.removeItem(key);
    alert('are you sure delete data?');
  };
  handleEditClick = (selectedUser) => {
    this.setState({ show: true });
    this.setState({ isEdit: true });

    this.setState({ activeUser: selectedUser });
  };

  render() {
    console.log('loading', this.props.loading);

    const userList = this.props.datalist;
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
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            {this.props.loading ? <div className="Loader">Loading...</div> : ''}
            {userList.length > 0
              ? userList.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>
                        <button onClick={() => this.RemoveEvent(key)}>
                          delete
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => this.handleEditClick(val)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })
              : 'No Student'}
          </table>
        </div>
        <main>
          <Modal
            show={this.state.show}
            handleAdd={this.hideModal}
            user={this.state.activeUser}
          ></Modal>
        </main>
        <Counter />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datalist: state.data,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actionCreators.fetchLists()),
    onAddList: (data) => dispatch(actionCreators.addList(data)),
    removeItem: (key) => dispatch(actionCreators.removeList(key)),
    editItem: (data) => dispatch(actionCreators.editItem(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
