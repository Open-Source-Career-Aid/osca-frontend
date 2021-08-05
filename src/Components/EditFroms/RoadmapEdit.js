import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "../../Styles/EditForms/RoadMapSkill.module.css";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import Drag from "../../Images/Drag.png";
import { useState } from "react";
import Delete from "../../Images/Delete.png";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import AddBack from "../../Images/ArrowBack.png";
import ArrowForward from "../../Images/ArrowForward.png";
import Arrow from "../../Images/Arrow.png";

const RoadmapEdit = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [links, setLinks] = useState("");
  const [resourses, setResourses] = useState([
    {
      name: "Full HTML Lecture PlayList",
      links: [
        "https://cdn.discordapp.com/attachments/852968860768010280/.... ",
        "https://cdn.discordapp.com/attachments/852968860768010280/.... ",
      ],
    },
  ]);

  // let resourses =

  const handleAdd = (idx) => {
    const values = resourses[idx];
    values.links.push(links);
    console.log(values);
    setResourses([values]);
  };

  const handleDelete = (idx, i) => {
    const values = resourses[idx];
    values.links.splice(i, 1);
    setResourses([values]);
  };

  return (
    <>
      <Row className={`${style.head}`}>RoadMap</Row>
      {/* <hr /> */}

      {resourses.map((res, idx) => {
        return (
          <>
            {isEditable ? (
              <div className={style.Drag}>
                <img src={Arrow} className={style.dragArrow} alt="" />
              </div>
            ) : null}
            <Row className={`my-1 ${style.backDrop}`}>
              <Col md={{ span: 9 }} className={style.headLine}>
                {res.name}
              </Col>
              <Col md={3} className={`text-end`}>
                {isEditable ? (
                  <>
                    <IconButton>
                      <CheckIcon className={style.Icon} />
                    </IconButton>
                    <IconButton onClick={() => setIsEditable(false)}>
                      <ClearIcon className={style.Icon} />
                    </IconButton>
                  </>
                ) : (
                  <IconButton onClick={() => setIsEditable(true)}>
                    <EditIcon className={style.Icon} />
                  </IconButton>
                )}
              </Col>
              {res.links.map((data, i) => {
                return (
                  <>
                    <Row className="pt-2">
                      <Col md={1} className="my-1">
                        <img src={Drag} alt="" />
                      </Col>
                      <Col md={11} className={style.links}>
                        <Row>
                          <Col md={11}>
                            <input
                              type="text"
                              className={style.inputF}
                              value={data}
                            />
                          </Col>
                          <Col
                            md={1}
                            className="justify-content-center text-center"
                          >
                            <img
                              src={Delete}
                              alt=""
                              className={style.Delete}
                              onClick={() => handleDelete(idx, i)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </>
                );
              })}
              <Row>
                <Col md={{ span: 11, offset: 1 }}>
                  <hr className={style.Rule} />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 11, offset: 1 }} className={style.links}>
                  <Row>
                    <Col md={11}>
                      <input
                        type="text"
                        className={`${style.inputF} ${style.inputE}`}
                        placeholder="Place the resourse link here."
                        onChange={(e) => setLinks(e.target.value)}
                      />
                    </Col>
                    <Col md={1} className="text-center justify-content-center">
                      <IconButton
                        className={`${style.trans}`}
                        onClick={() => handleAdd(idx)}
                      >
                        <AddIcon className={`${style.Icon}`} />
                      </IconButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={`${style.Arrow} pt-3`}>
                <Col md={{ span: 2, offset: 10 }} className="text-end">
                  <img src={AddBack} className={style.ArrowBtn} alt="" />
                  <img src={ArrowForward} alt="" />
                </Col>
              </Row>
            </Row>
            <hr className={style.hrCSS} />
          </>
        );
      })}
    </>
  );
};

export default RoadmapEdit;
