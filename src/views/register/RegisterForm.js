import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterForm = ({
  allCountries,
  registerObj,
  handleOnChange,
  handleOnSubmit
}) => {
  const renderAllCountry = () => {
    return allCountries.map((country, i) => (
      <option key={i}>{country.name}</option>
    ));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Company Register</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Company Name"
                  value={registerObj.name}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={registerObj.email}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="Enter Address"
                  value={registerObj.address}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Phone
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Enter Phone"
                  value={registerObj.phone}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Country
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="country"
                  onChange={handleOnChange}
                  value={registerObj.country}
                >
                  {renderAllCountry()}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                DOB
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="dob"
                  type="date"
                  placeholder="Enter DOB"
                  value={registerObj.dob}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>About Yourself</Form.Label>
              <Form.Control
                as="textarea"
                name="aboutYou"
                type="textarea"
                placeholder="Enter About Yourself"
                rows="5"
                value={registerObj.aboutYou}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Register
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/">Login?</Link>
        </Col>
      </Row>
    </Container>
  );
};

RegisterForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  allCountries: PropTypes.array,
  registerObj: PropTypes.object
};

export default RegisterForm;
