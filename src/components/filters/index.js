import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../store/actions/countries";
import { setDepartmentId } from "../../store/actions/departments";
import { fetchPostings, clearPostings } from "../../store/actions/postings";
import DepartmentDropdown from "./departmentDropdown";
import CountryDropdown from "./countryDropdown";

function Index({
  departments,
  countries,
  setSelectedDepartment,
  setSelectedCountry,
}) {
  const dispatch = useDispatch();

  const onSetDepartmentId = (departmentId) => {
    dispatch(clearPostings());
    dispatch(setDepartmentId(departmentId));
    dispatch(fetchPostings());
  };

  const onSetCountryCode = (countryCode) => {
    dispatch(clearPostings());
    dispatch(setCountryCode(countryCode));
    dispatch(fetchPostings());
  };

  return (
    <Container fluid className="p-3 filters">
      <Container>
        <Row className="text-center">
          <Col>
            <Dropdown>
              <Dropdown.Toggle
                data-test="department-filter"
                variant="success"
                id="dropdown-basic"
              >
                Department
              </Dropdown.Toggle>

              <DepartmentDropdown
                departments={departments}
                setSelectedDepartment={setSelectedDepartment}
                onSetDepartmentId={onSetDepartmentId}
              />
            </Dropdown>
          </Col>

          <Col>
            <Dropdown>
              <Dropdown.Toggle
                data-test="country-filter"
                variant="success"
                id="dropdown-basic"
              >
                Country
              </Dropdown.Toggle>

              <CountryDropdown
                countries={countries}
                setSelectedCountry={setSelectedCountry}
                onSetCountryCode={onSetCountryCode}
              />
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Index;
