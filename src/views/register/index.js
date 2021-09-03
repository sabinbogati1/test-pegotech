import { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

import RegisterForm from './RegisterForm';
import DetailModal from './DetailModal';
import { getAllCountries } from '../../api/CountryApi';
import './register.css';

const Register = () => {
  const initialRegisterObj = {
    name: '',
    email: '',
    address: '',
    phone: '',
    dob: '',
    country: '',
    aboutYou: ''
  };

  const [registerObj, setRegisterObj] = useState(initialRegisterObj);
  const [allCountries, setAllCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchAllCountries() {
      const countries = await getAllCountries();
      if (countries && countries.data) {
        setAllCountries(countries.data);
      }
    }
    fetchAllCountries();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setRegisterObj({
        ...registerObj,
        [name]: value
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="register-container bg-info">
      <Jumbotron className="form-box">
        <RegisterForm
          registerObj={registerObj}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          allCountries={allCountries}
        />
      </Jumbotron>
      <DetailModal
        showModal={showModal}
        handleClose={handleClose}
        registerObj={registerObj}
      />
    </div>
  );
};

export default Register;
