import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
//import Editbutton from '../Buttons/Editbutton';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };




function DeleteIcon1(props) {
    return (
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.50009 5.85571e-09C8.17319 -4.56244e-05 8.82078 0.266589 9.31003 0.745206C9.79928 1.22382 10.0931 1.87814 10.1312 2.57393L10.1353 2.72839H14.3921C14.5461 2.72844 14.6945 2.78904 14.807 2.89795C14.9196 3.00686 14.9881 3.15595 14.9986 3.31511C15.0091 3.47426 14.9608 3.63161 14.8636 3.75536C14.7664 3.87911 14.6274 3.96003 14.4748 3.98178L14.3921 3.98765H13.7467L12.7088 14.918C12.6568 15.463 12.4194 15.971 12.0391 16.3515C11.6587 16.7319 11.1601 16.96 10.6323 16.995L10.4896 17H4.5106C3.9815 17 3.46966 16.8052 3.06653 16.4504C2.6634 16.0956 2.39526 15.6039 2.31003 15.0633L2.29138 14.9172L1.25272 3.98765H0.608116C0.461164 3.98765 0.319186 3.93255 0.208437 3.83254C0.0976883 3.73254 0.0256611 3.59439 0.00567572 3.44365L0 3.35802C6.19702e-06 3.20587 0.0532244 3.05887 0.149813 2.94421C0.246401 2.82954 0.379826 2.75496 0.525412 2.73427L0.608116 2.72839H4.86492C4.86492 2.00478 5.14256 1.3108 5.63675 0.799128C6.13094 0.287455 6.8012 5.85571e-09 7.50009 5.85571e-09ZM12.5247 3.98765H2.47463L3.50194 14.7938C3.52468 15.0349 3.62731 15.2604 3.79239 15.4321C3.95747 15.6038 4.17485 15.7111 4.40762 15.7357L4.5106 15.7407H10.4896C10.9761 15.7407 11.3888 15.3839 11.4828 14.8996L11.4991 14.7938L12.5239 3.98765H12.5247ZM8.91903 6.2963C9.06598 6.2963 9.20796 6.3514 9.31871 6.45141C9.42946 6.55141 9.50148 6.68956 9.52147 6.8403L9.52714 6.92593V12.8025C9.5271 12.962 9.46857 13.1156 9.36338 13.2321C9.25819 13.3487 9.11419 13.4196 8.96048 13.4304C8.80676 13.4413 8.65479 13.3914 8.53527 13.2907C8.41575 13.19 8.33759 13.0461 8.31659 12.8881L8.31091 12.8025V6.92593C8.31091 6.75894 8.37498 6.59879 8.48903 6.48071C8.60307 6.36263 8.75775 6.2963 8.91903 6.2963ZM6.08116 6.2963C6.22811 6.2963 6.37009 6.3514 6.48083 6.45141C6.59158 6.55141 6.66361 6.68956 6.6836 6.8403L6.68927 6.92593V12.8025C6.68922 12.962 6.63069 13.1156 6.52551 13.2321C6.42032 13.3487 6.27632 13.4196 6.12261 13.4304C5.96889 13.4413 5.81692 13.3914 5.6974 13.2907C5.57787 13.19 5.49972 13.0461 5.47872 12.8881L5.47304 12.8025V6.92593C5.47304 6.75894 5.53711 6.59879 5.65115 6.48071C5.7652 6.36263 5.91987 6.2963 6.08116 6.2963ZM7.50009 1.25926C7.14399 1.25927 6.80091 1.39792 6.53895 1.64768C6.277 1.89744 6.11532 2.24005 6.08602 2.60751L6.08116 2.72839H8.91903C8.91903 2.33876 8.76954 1.96508 8.50343 1.68956C8.23733 1.41404 7.87642 1.25926 7.50009 1.25926Z" fill="black" />
        </svg>
    );
}
/*function DeleteIcon2(props) {
    return (
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.50009 5.85571e-09C8.17319 -4.56244e-05 8.82078 0.266589 9.31003 0.745206C9.79928 1.22382 10.0931 1.87814 10.1312 2.57393L10.1353 2.72839H14.3921C14.5461 2.72844 14.6945 2.78904 14.807 2.89795C14.9196 3.00686 14.9881 3.15595 14.9986 3.31511C15.0091 3.47426 14.9608 3.63161 14.8636 3.75536C14.7664 3.87911 14.6274 3.96003 14.4748 3.98178L14.3921 3.98765H13.7467L12.7088 14.918C12.6568 15.463 12.4194 15.971 12.0391 16.3515C11.6587 16.7319 11.1601 16.96 10.6323 16.995L10.4896 17H4.5106C3.9815 17 3.46966 16.8052 3.06653 16.4504C2.6634 16.0956 2.39526 15.6039 2.31003 15.0633L2.29138 14.9172L1.25272 3.98765H0.608116C0.461164 3.98765 0.319186 3.93255 0.208437 3.83254C0.0976883 3.73254 0.0256611 3.59439 0.00567572 3.44365L0 3.35802C6.19702e-06 3.20587 0.0532244 3.05887 0.149813 2.94421C0.246401 2.82954 0.379826 2.75496 0.525412 2.73427L0.608116 2.72839H4.86492C4.86492 2.00478 5.14256 1.3108 5.63675 0.799128C6.13094 0.287455 6.8012 5.85571e-09 7.50009 5.85571e-09ZM12.5247 3.98765H2.47463L3.50194 14.7938C3.52468 15.0349 3.62731 15.2604 3.79239 15.4321C3.95747 15.6038 4.17485 15.7111 4.40762 15.7357L4.5106 15.7407H10.4896C10.9761 15.7407 11.3888 15.3839 11.4828 14.8996L11.4991 14.7938L12.5239 3.98765H12.5247ZM8.91903 6.2963C9.06598 6.2963 9.20796 6.3514 9.31871 6.45141C9.42946 6.55141 9.50148 6.68956 9.52147 6.8403L9.52714 6.92593V12.8025C9.5271 12.962 9.46857 13.1156 9.36338 13.2321C9.25819 13.3487 9.11419 13.4196 8.96048 13.4304C8.80676 13.4413 8.65479 13.3914 8.53527 13.2907C8.41575 13.19 8.33759 13.0461 8.31659 12.8881L8.31091 12.8025V6.92593C8.31091 6.75894 8.37498 6.59879 8.48903 6.48071C8.60307 6.36263 8.75775 6.2963 8.91903 6.2963ZM6.08116 6.2963C6.22811 6.2963 6.37009 6.3514 6.48083 6.45141C6.59158 6.55141 6.66361 6.68956 6.6836 6.8403L6.68927 6.92593V12.8025C6.68922 12.962 6.63069 13.1156 6.52551 13.2321C6.42032 13.3487 6.27632 13.4196 6.12261 13.4304C5.96889 13.4413 5.81692 13.3914 5.6974 13.2907C5.57787 13.19 5.49972 13.0461 5.47872 12.8881L5.47304 12.8025V6.92593C5.47304 6.75894 5.53711 6.59879 5.65115 6.48071C5.7652 6.36263 5.91987 6.2963 6.08116 6.2963ZM7.50009 1.25926C7.14399 1.25927 6.80091 1.39792 6.53895 1.64768C6.277 1.89744 6.11532 2.24005 6.08602 2.60751L6.08116 2.72839H8.91903C8.91903 2.33876 8.76954 1.96508 8.50343 1.68956C8.23733 1.41404 7.87642 1.25926 7.50009 1.25926Z" fill="#989898" />
        </svg>

    );
}*/

const CustomSwitch = withStyles({
    switchBase: {
        color: '#E7E7E7',
        '&$checked': {
            color: '#E7E7E7',
        },
        '&$checked + $track': {
            backgroundColor: purple[900],
        },
    },
    addField: {
        border: 'solid',
        borderWidth: '2px'
    },
    checked: {},
    track: {},
})(Switch);

/*let edit_array = () => {

}*/

export const SuperSkillEdit = ( roadmap_topics ) => {


    console.log(roadmap_topics, "asdfkjl") ;

    const [superskill, setSuperskill] = useState(roadmap_topics.roadmap_skills);

    console.log(superskill);
    const [superskillField, setSuperskillField] = useState('');

    const [state, setstate] = useState({
        removeSuperskill: false
    })

    //const [input_feild_skills, set_input_feild_skill] = useState(Array.apply(null, Array(roadmap_topics.length)).map(function (x, i) { return true; }));

    //handle change

    const handleChangeSuperskillName = (e) => {
        setSuperskillField(e.target.value);
    }

    // handle click on add button 
    const handleClickSuperskill = () => {
        if (superskillField !== '') {
            let values = [...superskill];
            values.push({ skill: superskillField, resources: [{}] });
            setSuperskillField('');
            setSuperskill([...values]);
        }
    }

    // handle deletion of superskill

    const handleDeleteSuperskill = (e, idx) => {
        if (state.removeSuperskill === false) {
            let values = [...superskill];
            values.splice(idx, 1);
            setSuperskill([...values]);
        }
    }
    
    // change name in skill list

    // const handleChangeSuperskill_listName = (e, idx) => {
    //     e.preventDefault();
    //     let values = [...superskill];
    //     values[idx].name = e.target.value;
    //     setSuperskill([...values]);
    // }

    const handleChangeSuperSkillcheckbox = () => {
        setstate({ ...state, removeSuperskill: !state.removeSuperskill })
    }

    // const [titleField, setTitleField] = useState(Roadmap_title)

    // const handleChangeTitleName = (e) => {
    //     let titleValue = [...titleField]
    //     setTitleField([...titleValue])
    //     setTitleField(e.target.value)
    //     titleValue.push({ name: titleField })
    // }

    // handle change input edit
    /*const handleChangeSuperSkillsEdit = ( idx) => {
        let values = [...input_feild_skills];
        console.log(idx, 'here its ')
        values[idx] = !values[idx];
        set_input_feild_skill([...values]);
    }*/

    const  Quote = ({ quote, index }) => {
        return (
          <Draggable draggableId= {'id-'+ index} index={index}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                  <>
                  <Row>
                      <Col xs='auto'>
                        <IconButton style={{paddingRight:'0', paddingBottom:'1em', paddingLeft:'0'}} >
                            <DragIndicatorIcon/>
                        </IconButton>
                      </Col>
                      <Col>
                      
                <div className="skills__button">
                                        <div className="skills__name">
                                           {quote.skill}
                                           
                                        </div>
                                        {/* <div className='skillsdelete__btn'>
                                            <IconButton style={{padding:'0'}}>
                                                <Editbutton fun={handleChangeSuperSkillsEdit} index={index} />
                                            </IconButton>
                                        </div> */}
                                        <div className="skillsdelete__btn">
                                            <DeleteIcon1 onClick={e => handleDeleteSuperskill(e, index)} />
                                        </div>
                                    </div>
                      </Col>
                  </Row>
                  </>
              </div>
            )}
          </Draggable>
        );
      }
      const QuoteList = React.memo(function QuoteList({ quotes }) {
      return quotes.map((quote, index) => (
          
        <Quote quote={quote} index={index} key={quote.id} />
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
        const skills_list = reorder(
          superskill,
          result.source.index,
          result.destination.index
        );
    
        setSuperskill([...skills_list]);
      }
    

   
    

    if (state.removeSuperskill) {
        return (
            <Form>
                <div className="remove__skill">
                    <p>
                        Do you want to remove this Super-Skill ?
                    </p>
                    <div>
                        <FormControlLabel control={<CustomSwitch checked={state.removeSuperskill} onChange={handleChangeSuperSkillcheckbox} name="checkedB" />} label="" />
                    </div>
                </div>
               
                {/* <div className="all__tags">
                    <div className="tags__edit remove__roadmap">
                        Skills
                    </div>
                    <div className="tags__field">
                        <input onChange={e => handleChangeSuperskillName(e)} value={superskillField} type="text" className='inputField' placeholder="Add a skill" disabled />
                        <AddIcon onClick={e => handleClickSuperskill(e)} />
                    </div>
                </div> */}
                {/* <div className="skills__area hidden">
                    {superskill.map((skill, idx) => {
                        if (idx >= 0) {

                            return (
                                <div className="skills__button">
                                    <div className="skills__name remove__roadmap">
                                        {skill.name}
                                    </div>
                                    <div className="skillsdelete__btn">
                                        <DeleteIcon2 onClick={e => handleDeleteSuperskill(e, idx)} />
                                    </div>
                                </div>
                            )
                        } else { return null }

                    })}
                     
                </div> */}
            </Form>
        )
    }
    else {
        return (
            <Form>
                <div className="remove__skill">
                    <p>
                        Do you want to remove this Super-Skill ?
                    </p>
                    <div>
                        <FormControlLabel control={<CustomSwitch checked={state.removeSuperskill} onChange={handleChangeSuperSkillcheckbox} name="checkedB" />} label="" />
                    </div>
                </div>
               
                <div className="all__tags">
                    <div className="tags__edit">
                        Skills
                    </div>
                    <div className="tags__field">
                        <input onChange={e => handleChangeSuperskillName(e)} value={superskillField} type="text" className='inputField' placeholder="Add a skill" />
                        <AddIcon onClick={e => handleClickSuperskill(e)} />
                    </div>
                </div>
                <div className="skills__area">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="list">
                            {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <QuoteList quotes={superskill} />
                                {provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
               
            </Form>
        )
    }
}