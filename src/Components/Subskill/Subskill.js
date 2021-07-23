import React ,{useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import SkillCard from './../Skill/SkillCard';
import './../../Styles/Skill.css';
import EditButton from '../Buttons/Editbutton';

const roadmap ={
    name: 'HTML',
    tags: [ {name: 'HTML'}, {name: 'HTML'}, {name: 'HTML'}, {name: 'Machine Learning'}, {name: 'CSS'} ],
    preReuqisites : [ {name: 'HTML'}, {name: 'HTML'}, {name: 'HTML'}, {name: 'Machine Learning'}, {name: 'CSS'} ],
    
            resources: [
                {
                    name: 'Instalation and Setup',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                },
                {
                    name: 'Attributes',
                    links: [
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... ',
                        'https://cdn.discordapp.com/attachments/852968860768010280/.... '
                    ]
                }
            ]

    
}


const Subskill = () => {
    
   const [editMode, setEditMode] = useState(0);

   const handleEditMode = () => {
       setEditMode(!editMode);
   }

   
 return (
     <div className="headingRow">
           <Col className="backarrow" xs={12} sm={12} md={1}  lg={1} xl={1}>
              <img style={styles.backButton} src='./../../back.png' />
            </Col>
            <Col xs={12} sm={12} md={11}  lg={11} xl={11}>

         <Row style={styles.fullWidth} >
          
            <Col xs={11} sm={11} md={11}  lg={11} xl={11} >
            <h2>{roadmap.name}</h2>
            </Col>
            {editMode ?

                <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                    <EditButton />
                </Col>
                :
                null
            }
         </Row>
         <div className='tagContainer'>
             <Row>
                <Col>
                    <h5 >Tags</h5>
                </Col>
                {editMode ?

                <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                    <EditButton />
                </Col>
                :
                null
            }
             </Row>
             <Row >
                 {roadmap.tags.map((tag, idx) => {
                     return (

                         <Col  key={idx} className='colorTags' xs='auto'>
                           { tag.name}
                        </Col>
                         )
                })}
             </Row>
         </div>
         <div  className='tagContainer'>
             <Row >
                <Col>
                    <h5  >Pre-requisites</h5>
                </Col>
                {editMode ?

                <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                    <EditButton />
                </Col>
                :
                null
            }
             </Row>
             <Row  >
                 {roadmap.preReuqisites.map((preReuqisite, idx) => {
                     return(
                         
                         <Col className='skilltags' xs='auto'>
                             {preReuqisite.name}
                        </Col>
                         )
                })}
             
             </Row>
         </div>
         <div style={{paddingLeft: '.6em'}}>
            <h3>Roadmap</h3>
            <SkillCard  props={roadmap.resources} />
         </div>
</Col>
 </div>
 );   

}


const styles = {
    btn: {
        backgroundColor: 'white',
        border: 'none',
    },
    leftbutton: {
        height: '.8em',
        width: '.9em',
    },
    dropButton: {
        height: '.6em',
        width: '1em'
    },
    backButton: {
        marginTop: '.3em',
        height: '1.2em',
        width: '1.5em',
        
    },
    fullWidth: {
        width: '100%'
    }
}

export default Subskill;