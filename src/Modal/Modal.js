import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ handleAdd, show, user }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    handleAdd({ name: name, age: age, id: user.id });
  };

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
  }, [user]);

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <form>
            <input
              type="text"
              name="No"
              placeholder="Name"
              onChange={handleChange}
              value={name}
            />
            <input
              type="text"
              name="No"
              placeholder="Age"
              onChange={handleChangeAge}
              value={age}
            />
          </form>
          <br />
          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </section>
      </div>
    </>
  );
};
export default Modal;
