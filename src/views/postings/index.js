import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { fetchCountries, setCountryCode } from "../../store/actions/countries";
import Filters from "../../components/filters";
import SelectedFilters from "../../components/filters/selected";
import JobPosting from "../../components/postings/jobPosting";
import { useHistory } from "react-router-dom";
import {
  fetchDepartments,
  setDepartmentId,
} from "../../store/actions/departments";
import {
  clearPostingDetails,
  clearPostings,
  fetchPostings,
  setPostingId,
} from "../../store/actions/postings";
import "./postings.scss";

const renderSkeleton = () => {
  return <Skeleton circle={true} height={100} count={10} />;
};

function Postings() {
  const departments = useSelector((state) => state.departments);
  const countries = useSelector((state) => state.countries);
  const postings = useSelector((state) => state.postings);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (Object.keys(postings).length === 0) {
      dispatch(fetchPostings());
    }

    if (Object.keys(departments).length === 0) {
      dispatch(fetchDepartments());
    }

    if (Object.keys(countries).length === 0) {
      dispatch(fetchCountries());
    }
  }, []);

  const onSetPostingClicked = (postingId) => {
    dispatch(clearPostingDetails());
    dispatch(setPostingId(postingId));
    history.push("/detail");
  };

  const onClearPostings = () => {
    setSelectedDepartment(null);
    setSelectedCountry(null);
    dispatch(clearPostings());
    dispatch(setDepartmentId(""));
    dispatch(setCountryCode(""));
    dispatch(fetchPostings());
  };

  const totalPostings = postings.totalFound ? postings.totalFound : 0;

  return (
    <Container fluid className="postings-container">
      <Filters
        countries={countries}
        departments={departments}
        setSelectedDepartment={setSelectedDepartment}
        setSelectedCountry={setSelectedCountry}
      />
      <Container className="p-3 my-3">
        <SelectedFilters
          selectedDepartment={selectedDepartment}
          selectedCountry={selectedCountry}
          onClearPostings={onClearPostings}
        />

        <Card.Title className="mb-3">{`Job Posting (${totalPostings})`}</Card.Title>

        {Object.keys(postings).length === 0 && renderSkeleton()}

        {Object.keys(postings).length > 0 && (
          <JobPosting postings={postings} setPostingId={onSetPostingClicked} />
        )}
      </Container>
    </Container>
  );
}

export default Postings;
