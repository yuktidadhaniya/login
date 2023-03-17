import React, { Component } from 'react';
import './App.css';


class Table extends Component {
  // constructor() {
  //   super();
  //   this.state = { value: '' };

  //   this.state = {
  //     show: false,
  //     userList: [],
  //   };
  //   this.showModal = this.showModal.bind(this);
  //   this.hideModal = this.hideModal.bind(this);
  // }

  render() {
    // console.log('userList', userList);
    return (
      <>
        <div className="App">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>

            {/* {userList.length > 0
              ? userList.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                    </tr>
                  );
                })
              : 'No Student'} */}
          </table>
        </div>
      </>
    );
  }
}

export default Table;
