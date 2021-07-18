import React ,{useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button, Collapse}  from 'react-bootstrap';
import SkillCard from './SkillCard';
import './../Styles/Skill.css';
import EditButton from './Buttons/Editbutton';

const roadmap ={
    name: 'Web Devlopment',
    tags: [ {name: 'HTML'}, {name: 'HTML'}, {name: 'HTML'}, {name: 'Machine Learning'}, {name: 'CSS'} ],
    preReuqisites : [ {name: 'HTML'}, {name: 'HTML'}, {name: 'HTML'}, {name: 'Machine Learning'}, {name: 'CSS'} ],
    skills : [
        { 
            name: 'HTML',
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


        },
        { 
            name: 'CSS',
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
    ]
}





// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
//   }
const leftsrc = './../../leftarrow.png';
const upsrc = './../../up.png';

let srcdict  = {};
let opendict = {};

let i=0;
for(i = 0; i<=roadmap.skills.length; i++) {
    srcdict[i] = leftsrc;
    opendict[i] =false;
}

const Skill = () => {
    
    const [open, setOpen] = useState(opendict);
    const [src, setSrc] = useState(srcdict);
    
    const handleChange = (idx) => {
        let values = {...open};
        values[idx] = !values[idx];
        setOpen({...values});
        if(src[idx] === leftsrc) {
            src[idx] = upsrc;
            setSrc({...src})
        } else { 
            src[idx] = leftsrc;
            setSrc({...src})
        }
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
            <Col xs={1} sm={1} md={1}  lg={1} xl={1}>
                <EditButton />
            </Col>
         </Row>
         <div className='tagContainer'>
             <Row>
                <Col>
                    <h5 >Tags</h5>
                </Col>
                <Col xs={1}>
                    <EditButton />
                </Col>
             </Row>
             <Row >
                 {roadmap.tags.map((tag, idx) => {
                     return (

                         <Col  key={idx} className='colorTags' xs='auto'>
                           { tag.name}
                        </Col>
                         )
                })}
                 {/* <Col className='colorTags' xs='auto'>
                     Machine Learning
                 </Col>
                 <Col className='colorTags' xs='auto'>
                     HTML
                 </Col> */}
             </Row>
         </div>
         <div className='tagContainer'>
             <Row>
                <Col>
                    <h5  >Pre-requisites</h5>
                </Col>
                <Col xs={1}>
                    <EditButton />
                </Col>
             </Row>
             <Row >
                 {roadmap.preReuqisites.map((preReuqisite, idx) => {
                     return(
                         
                         <Col className='tags' xs='auto'>
                             {preReuqisite.name}
                        </Col>
                         )
                })}
                 {/* <Col className='tags' xs='auto'>
                     HTML
                 </Col>
                 <Col className='tags' xs='auto'>
                     HTML
                 </Col> */}
             </Row>
         </div>
     <div className='skillContainer'>
       {roadmap.skills.map((skill, idx) => {
                     
           return (
            <>
               <Row  style={styles.fullWidth} className='align-items-center'  >
            <Col  xs={11} sm={11} md={11}  lg={11} xl={11} >
                <h3 className='skillName'>{skill.name}</h3>
            </Col>
            <Col xs={1} sm={1} md={1}  lg={1} xl={1} >
                <Button
                    style={styles.btn}
                    
                    onClick={() => handleChange(idx)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    <img style={ open[idx]? styles.dropButton : styles.leftbutton} src={src[idx]} />
                </Button>
            </Col>
        </Row>
        <Collapse  in={open[idx]}>
            <div id="example-collapse-text">

                <SkillCard props={skill.resources} />
            </div>
        </Collapse>
        </> 
        
        )
        })} 
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

export default Skill;