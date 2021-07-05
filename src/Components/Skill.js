import React ,{useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button, Collapse}  from 'react-bootstrap';
import SkillCard from './SkillCard';
import './../Styles/Skill.css';

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
              <img style={styles.copyButtonIcon} src='./../../back.png' />
            </Col>
            <Col xs={12} sm={12} md={11}  lg={11} xl={11}>

         <Row style={styles.fullWidth} >
          
            <Col xs={10} sm={11} md={11}  lg={11} xl={11} >
            <h2>Web Devlopment</h2>
            </Col>
            <Col xs={2} sm={1} md={1}  lg={1} xl={1}>
                {isDesktop ? 
                (<Button className="addbutton" > Add</Button>)
                :
                (<Button className="addbutton" >
                    <img style={styles.copyButtonIcon} src='./../../plus.png' />
                </Button>)

                }
            </Col>
         </Row>
     <div className='skillContainer'>
        <h5 className="tags">Subskills</h5>
        <Row>
            {
                //tags
            }
        </Row>
        <Row   >
            <Col  xs={10} sm={10} md={11}  lg={11} xl={11} >
        <h3 className='skillName'>HTML</h3>
            </Col>
            <Col xs={1} sm={1} md={1}  lg={1} xl={1} >
            <Button
            style={styles.dropButton}
            
            onClick={() => handleChange()}

            aria-controls="example-collapse-text"
        aria-expanded={open}>
                <img style={styles.copyButtonIcon} src={iconsrc} />
            </Button>
            </Col>
        </Row>
        <Collapse  in={open}>
            <div id="example-collapse-text">

            <SkillCard />
            </div>
        </Collapse>
        
     </div>
</Col>
 </div>
 );   

}


const styles = {
    dropButton: {
        backgroundColor: 'white',
        border: 'none'
    },
    copyButtonIcon: {
        height: '1.2em',
        width: '1.2em',
        
    },
    fullWidth: {
        width: '100%'
    }
}

export default Skill;