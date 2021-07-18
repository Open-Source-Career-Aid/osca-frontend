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





function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Skill = () => {
    const [open, setOpen] = useState(false);
    const upsrc = './../../up.png';
    const leftsrc = './../../leftarrow.png';
    const [iconsrc, setSrc] = useState(leftsrc);
    const handleChange = () => {
        setOpen(!open);
        if(iconsrc === leftsrc) {
            setSrc(upsrc)
        } else { 
            setSrc(leftsrc)
        }
    }

    const [isDesktop, setDesktop] = useState(window.innerWidth > 750);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
                    
                    onClick={() => handleChange()}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    <img style={ open? styles.dropButton : styles.leftbutton} src={iconsrc} />
                </Button>
            </Col>
        </Row>
        <Collapse  in={open}>
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
        height: '1em',
        width: '.8em',
    },
    dropButton: {
        height: '.8em',
        width: '1.1em'
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