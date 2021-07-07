import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { fetchPostingDetails } from "../../store/actions/postings";
import PostingDetailsBanner from "../../components/postings/postingDetailsBanner";
import JobPostingDetails from "../../components/postings/jobPostingDetails";
import "./postingDetails.scss";

const renderSkeleton = () => {
  return (
    <>
      <Skeleton circle={true} height={50} width={50} />
      <Skeleton height={50} width={500} />
      <hr />
      <Skeleton height={50} width={400} />
      <Skeleton height={50} count={8} />
      <Skeleton height={50} width={300} />
      <Skeleton height={50} width={300} />
      <hr />
      <Skeleton height={50} width={500} />
      <Skeleton height={50} count={8} />
      <Skeleton height={50} width={600} />
    </>
  );
};

function PostingDetails() {
  const postingId = useSelector((state) => state.postingId);
  const postingDetails = useSelector((state) => state.postingDetails);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (postingId === null) {
      history.push("/");
    } else {
      dispatch(fetchPostingDetails());
    }
  }, []);

  return (
    <Container fluid className="postings-details-container">
      <PostingDetailsBanner history={history} />
      <Container className="p-3 my-3">
        {Object.keys(postingDetails).length === 0 && renderSkeleton()}
        {Object.keys(postingDetails).length > 0 && (
          <JobPostingDetails postingDetails={postingDetails} />
        )}
      </Container>
    </Container>
  );
}

export default PostingDetails;
