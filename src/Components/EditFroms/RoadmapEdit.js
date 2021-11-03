import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import style from "../../Styles/EditForms/RoadMapSkill.module.css";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
//import Drag from "../../Images/Drag.png";
import { useState } from "react";
import Delete from "../../Images/Delete.png";
import CheckIcon from "@material-ui/icons/Check";
//import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
//import AddBack from "../../Images/ArrowBack.png";
//import ArrowForward from "../../Images/ArrowForward.png";
import Arrow from "../../Images/Arrow.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};



const RoadmapEdit = (props) => {

  const [roadmap_data, setroadmap_data] = useState(props.data);

  const links_dict = {};
  const isEditable_dict = {};
  for (let i = 0; i < props.data.length; i++) {
    links_dict[i] = '';
    isEditable_dict[i] = 0;
  }

  const [edit_links, setLinks] = useState(links_dict);
  const [isEditable_topicname, setIsEditable_topicname] = useState(isEditable_dict);

  const handle_topic_name_change = (idx, val, e) => {
    e.preventDefault();
    let values = roadmap_data;
    values[idx].topicName = val;
    setroadmap_data([...values]);
  }

  const handle_topicName_edit = (idx) => {
    isEditable_topicname[idx] = 1 - isEditable_topicname[idx];
    console.log(isEditable_topicname[idx])
    setIsEditable_topicname({ ...isEditable_topicname });
  }

  const handleDelete = (idx, i) => {
    const values = roadmap_data;
    values[idx].resources.splice(i, 1);
    setroadmap_data([...values]);
  };

  const handle_link_change = (idx, val, e) => {
    e.preventDefault();
    let values = edit_links;
    values[idx] = val;
    setLinks({ ...values });
  }

  const handleAdd = (idx) => {
    if (edit_links[idx] !== "") {
      let values = roadmap_data;
      values[idx].resources.push({ 'link': edit_links[idx] });
      console.log(values);
      let links_value = edit_links;
      links_value[idx] = "";
      setLinks({ ...links_value });
      setroadmap_data([...values]);
    }
    else {
      alert('field cannot be empty')
    }
  };

  const handleAddLast = () => {
    let values = roadmap_data;
    values.push({ topicName: "", resources: [] });
    setroadmap_data([...values]);
    let idx = values.length - 1;
    isEditable_topicname[idx] = 1;
    setIsEditable_topicname({ ...isEditable_topicname });
  }

  const handleAddTopicBtw = (index) => {
    let values = roadmap_data;
    values.splice(index, 0, ({ topicName: "", resources: [] }));
    isEditable_topicname[index] = 1;
    setIsEditable_topicname({ ...isEditable_topicname });
    setroadmap_data([...values]);
  }

  /*const Quote = ({ quote, index, resourcesIndex }) => {
    return (
      <Draggable draggableId={'id-' + index} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <>
              <Row className="pt-2">
                <Col md={1} className="my-1">
                  <img src={Drag} alt="" />
                </Col>
                <Col md={11} className={style.links}>
                  <Row>
                    <Col md={11}>
                      {quote.link}
                    </Col>
                    <Col
                      md={1}
                      className="justify-content-center text-center"
                    >
                      <img
                        src={Delete}
                        alt=""
                        className={style.Delete}
                        onClick={() => handleDelete(index, resourcesIndex)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          </div>
        )}
      </Draggable>
    );
  }

  const QuoteList = React.memo(function QuoteList({ quotes, pre }) {
    return quotes.map((quote, index) => (

      <Quote quote={quote} index={index} resourcesIndex={pre} />
    ));
  });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    console.log(result, 'result')
    const links_list = reorder(
      edit_links,
      result.source.index,
      result.destination.index
    );
    setLinks([...links_list]);
  }*/


  const QuoteMain = ({ quotemain, index }) => {
    return (
      <Draggable draggableId={'id-' + index} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <>
              <div className={style.addtopicbtw} onClick={() => handleAddTopicBtw(index)}>
                <hr className={style.divider}></hr>
                <div className={style.add__round}>
                </div>
              </div>
              <div className={style.Drag}>
                <img src={Arrow} className={style.dragArrow} alt="" />
              </div>
              <Row style={{"flex-wrap" : "wrap"}} className={`my-1 ${style.backDrop}`}>
                <Col md={{ span: 9 }} className={style.headLine}>
                  {isEditable_topicname[index] === 1 ?

                    <input
                      value={quotemain.topicName}
                      className={style.inputF}
                      onChange={e => handle_topic_name_change(index, e.target.value, e)}
                      placeholder="topic name"
                    />
                    :
                    <>
                      {quotemain.topicName}
                    </>
                  }

                </Col>
                
                <Col md={3} className={`text-end`}>
                  {isEditable_topicname[index] ? (
                    <>
                      {/* <IconButton>
                      <CheckIcon className={style.Icon} />
                    </IconButton> */}
                      <IconButton onClick={() => handle_topicName_edit(index)}>
                        <CheckIcon className={style.Icon} />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton onClick={() => handle_topicName_edit(index)}>
                      <EditIcon className={style.Icon} />
                    </IconButton>
                  )}
                </Col>
                {quotemain.resources.map((data, i) => {
                  return (
                    <>
                      <Row className="pt-2">
                       
                        <Col md={11} className={style.links}>
                          <Row>
                            <Col className={style.links_input} md={11}>

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
                                onClick={() => handleDelete(index, i)}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </>
                  );
                })}
                {/*<DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="list">
                    {provided => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <QuoteList quotes={quotemain.resources} pre={index} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                    </DragDropContext>*/}
                <Row>
                  {/* <Col md="12"> */}
                    <hr className={style.Rule} />
                  {/* </Col> */}
                </Row>
                <Row>
                  <Col md={{ span: 11}} className={style.links}>
                    <Row>
                      <Col md={11}>
                        <input
                          type="text"
                          className={`${style.inputF} ${style.inputE}`}
                          placeholder="Place the resourse link here."
                          onChange={(e) => handle_link_change(index, e.target.value, e)}
                          value={edit_links[index]}
                          
                        />
                      </Col>
                      <Col md={1} className="text-center justify-content-center">
                        <IconButton
                          className={`${style.trans}`}
                          onClick={() => handleAdd(index)}
                        >
                          <AddIcon className={`${style.Icon}`} />
                        </IconButton>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className={`${style.Arrow} pt-3`}>
                  <Col md={{ span: 2, offset: 10 }} className="text-end">
                    {/*<img src={AddBack} className={style.ArrowBtn} alt="" />
                    <img src={ArrowForward} alt="" />*/}
                  </Col>
                </Row>
              </Row>
            </>
          </div>
        )}
      </Draggable>
    );
  }

  const QuoteListmain = React.memo(function QuoteListmain({ quotesmain }) {
    return quotesmain.map((quotemain, index) => (

      <QuoteMain quotemain={quotemain} index={index} />
    ));
  });

  function onDragEndmain(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    console.log(result, 'result')
    const roadmap_list = reorder(
      roadmap_data,
      result.source.index,
      result.destination.index
    );
    setroadmap_data([...roadmap_list]);
  }

  return (
    <>
      <Row className={`${style.head}`}>RoadMap</Row>
      <DragDropContext onDragEnd={onDragEndmain}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <QuoteListmain quotesmain={roadmap_data} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={style.addelement}>
        <hr className={style.hrCSS} />
        <Button className={style.addbtn} onClick={handleAddLast}>
          Add a topic
        </Button>
        <hr className={style.hrCSS} />
      </div>
      <Row xs='auto' className="justify-content-center text-end">
        <Button className={style.submitbtn} type='submit'>
          Submit
        </Button>
      </Row>
    </>
  );
};

export default RoadmapEdit;
