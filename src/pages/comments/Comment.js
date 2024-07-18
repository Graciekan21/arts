import React, { useState, useEffect, useCallback } from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown, ReportDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
import ReportAbuseCreateForm from "./../report/ReportAbuseCreateForm";
import ReportList from "./../report/ReportList";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [reports, setReports] = useState([]);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const is_superuser = currentUser?.is_superuser;

  const handleResolve = async (reportId) => {
    try {
      await axiosRes.patch(`/reports/${reportId}/`, { is_resolved: true });
      fetchReports();
    } catch (error) {
      console.error("Error resolving report:", error);
    }
  };

  const fetchReports = useCallback(async () => {
    try {
      const response = await axiosRes.get(`/comments/${id}/reports/`);
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }, [id]);

  useEffect(() => {
    if (is_superuser) {
      fetchReports();
    }
  }, [fetchReports, is_superuser]);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const handleReportAbuse = () => {
    setShowReportForm(true);
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}

          {showReportForm && <ReportAbuseCreateForm reportedContent={id} />}

          {is_superuser && reports.length > 0 && (
            <ReportList reports={reports} handleResolve={handleResolve} />
          )}
        </Media.Body>

        {!showReportForm && (
          <ReportDropdown handleReportAbuse={handleReportAbuse} />
        )}
        {is_owner && !showEditForm && !showReportForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
