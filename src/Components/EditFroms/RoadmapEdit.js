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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const RoadmapEdit = ( props) => {
  const [isEditable, setIsEditable] = useState(false);
  
  console.log(props, 'ter');
  const links_dict = {};
  const isEditable_dict = {};
  for(let i=0;i<props.data.length; i++) {
    links_dict[i]='';
    isEditable_dict[i]=0;
  }
  const [isEditable_topicname, setIsEditable_topicname] = useState(isEditable_dict);
  const [edit_links, setLinks] = useState(links_dict);
  const [roadmap_data, setroadmap_data] = useState(props.data);
  // let resourses =

  const handleAdd = (idx) => {
    let values = roadmap_data;
    values[idx].resources.push({'link':edit_links[idx]});
    console.log(values);
    let links_value = edit_links;
    links_value[idx] = "";
    setLinks({...links_value});
    setroadmap_data([...values]);
  };

  const handleDelete = (idx, i) => {
    const values = roadmap_data;
    values[idx].resources.splice(i, 1);
    setroadmap_data([...values]);
  };

  const handle_link_change = (idx, val) => {
    let values = edit_links;
    edit_links[idx] = val;
    setLinks({...values});
  }

  const handle_topic_name_change = (idx, val) => {
    let values = roadmap_data;
    values[idx].topicName = val;
    setroadmap_data([...values]);
  }

  const handle_topicName_edit = (idx) => {
    isEditable_topicname[idx] =1- isEditable_topicname[idx];
    console.log(idx)
    setIsEditable_topicname({...isEditable_topicname});
  }










  return (
    <>
      <Row className={`${style.head}`}>RoadMap</Row>
      

      {roadmap_data.map((res, idx) => {
        return (
          <>
            {isEditable ? (
              <div className={style.Drag}>
                <img src={Arrow} className={style.dragArrow} alt="" />
              </div>
            ) : null}
            <Row className={`my-1 ${style.backDrop}`}>
              <Col md={{ span: 9 }} className={style.headLine}>
              {isEditable_topicname[idx] === 1?
                            
                            <input 
                              value={res.topicName}
                              className={style.inputF}
                              onChange={e => handle_topic_name_change(idx, e.target.value)}
                            />
                          :
                          <>
                          {res.topicName}
                          </>
                          }
                
              </Col>
              <Col md={3} className={`text-end`}>
                {isEditable_topicname[idx] ? (
                  <>
                    {/* <IconButton>
                      <CheckIcon className={style.Icon} />
                    </IconButton> */}
                    <IconButton onClick={() => handle_topicName_edit(idx)}>
                      <CheckIcon className={style.Icon} />
                    </IconButton>
                  </>
                ) : (
                  <IconButton onClick={() => handle_topicName_edit(idx)}>
                    <EditIcon className={style.Icon} />
                  </IconButton>
                )}
              </Col>
              {res.resources.map((data, i) => {
                return (
                  <>
                    <Row className="pt-2">
                      <Col md={1} className="my-1">
                        <img src={Drag} alt="" />
                      </Col>
                      <Col md={11} className={style.links}>
                        <Row>
                          <Col md={11}>
                            
                          {data.link}  
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
                        onChange={(e) => handle_link_change(idx,e.target.value)}
                        value={edit_links[idx]}
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
