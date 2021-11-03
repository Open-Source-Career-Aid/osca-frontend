import React from "react";
import { Row, Col } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import "./Skill.css";
import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { TagsEdit } from "../EditFroms/TagsEdit";
import { PrerequisitesEdit } from "../EditFroms/PrerequisitesEdit";
import RoadmapEdit from "../EditFroms/RoadmapEdit";
// import { useHistory, useLocation } from "react-router";
import { useHistory } from "react-router-dom";

const SubskillEdit = (props) => {
  const history = useHistory();
  // console.log(location.state); 
  let {subskilldata} = props.location.state;
  let edit_data = subskilldata;
  const [isEdit, setIsEdit] = useState(false);
  const [valueEdit, setEditValue] = useState(edit_data.skill);


  // console.log(edit_data);
  return (
    <div className="spacingTop">
      <Row>
        <Col md={{ span: 1, offset: 2 }} className="text-end">
          <IconButton >
            <ArrowBackIcon onClick={() => history.goBack()}  className="EditBtn" />
          </IconButton>
        </Col>
        <Col md={6} className="inputExtension">
          <Row>
            <Col xs={8}>
              <input
                type="text"
                className={!isEdit ? "editLabel" : "editLabel labelEdit"}
                onChange={(e) => setEditValue(e.target.value)}
                value={!isEdit ? valueEdit : null}
              />
            </Col>
            <Col
              xs={4}
              className={`Extension justify-content-center ${isEdit ? "text-center" : "text-end"
                }`}
            >
              {isEdit ? (
                <>
                  <IconButton>
                    <CheckIcon
                      className="EditBtn"
                      onClick={() => setIsEdit(!isEdit)}
                    />
                  </IconButton>
                  <IconButton onClick={() => setIsEdit(!isEdit)}>
                    <ClearIcon className="EditBtn" />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={() => setIsEdit(!isEdit)}>
                  <EditIcon className="EditBtn" />
                </IconButton>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <PrerequisitesEdit prerequisite_data={edit_data.prerequisites} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <TagsEdit tags_data={edit_data.tags} />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <RoadmapEdit data={edit_data.topics} />

        </Col>
        <Col md={2} className="justify-content-end align-bottom"></Col>
      </Row>
    </div>
  );
};

export default SubskillEdit;
