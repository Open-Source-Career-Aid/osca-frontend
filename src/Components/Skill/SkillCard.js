import React, { useState } from 'react'
import { Row, Col, Button} from 'react-bootstrap';
import './../../Styles/skillCard.css';



const SkillCard = (props) => {
    const [show_tooltip,setShow] =useState({"0":1});
    props = props.props;
    // const target = useRef(null);
    // console.log(props);
    const handleChange = (link, idx) => {
      navigator.clipboard.writeText(link) ;
      let item = show_tooltip;
      item[idx]=!item[idx];
        setShow({...item});
    }
   

      useState(() => {
        let item=show_tooltip;
        for(let i=0;i<props.length;i++){
            show_tooltip[i]=0;
        }
        setShow({...item});
      },[])
    return (
        <>
            {props.map((SkillCard, idx) => {
                return (
                    <>
                        <div className="skillCardres">
                            <h5 className='py-2'>{SkillCard.topicName}</h5>
                            <Row className="links ">
                                {SkillCard.resources.map((link, idx) => {
                                    return (
                                        <>
                                            <Col style={{ maxWidth: '90%', overflow: 'hidden' }} xs={10} sm={11} md={11} lg={11} xl={11}>
                                                <span style={styles.value} >{link.link}</span>
                                            </Col>
                                            <Col className='copyButtonCol' xs={2} sm={1} md={1} lg={1} xl={1}>
                                            
                                                <Button id={idx}  className="copyButton"  style={styles.copyButton} onClick={() =>handleChange(link.link,idx) }>
                                                    {/* <Link> */}
                                                        <img style={styles.copyButtonIcon} src="../copy.png" alt="" />
                                                    {/* </Link> */}
                                                </Button>
                                           
                                            </Col>
                                        </>
                                    )
                                })}
                            </Row>
                            <Row>

                                <p className='description'>  </p>
                            </Row>
                        </div>
                        {/* {editMode 
                   ? 
                   <div className='editRow' >
                    <Row  >
                        <Col>
                            <hr className='edit' />
                        </Col>
                        <Col xs='auto'>
                            <img style={styles.insertbtn} src='./addWhite.png'>
                                
                            </img>
                        </Col>
                    </Row>
                   </div>
                    :    
                    null
                } */}
                    </>

                )
            })}
        </>
    );

}

const styles = {
    copyButton: {
        backgroundColor: 'white',
        border: 'none'
    },
    copyButtonIcon: {
        height: '1.5em',
        width: '1.2em',
        objectFit: 'contain'
    },
    fullWidth: {
        width: '100%'
    },
    link: {
        color: ' #989898',
        fontWeight: '500',

    },
    // insertbtn: {
    //     height: '1.8em',
    //     width: '1.8em',
    //     transform: 'rotate(135deg)',
    //     background: 'black',
    //     borderRadius: '18.5px 18.5px 0px 18.5px',
    // }
}

export default SkillCard;