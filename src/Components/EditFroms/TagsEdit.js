import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import { SvgIcon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function DeleteIcon(props) {
    return (
        <SvgIcon viewBox="0 0 14 16" fill="none" {...props}>
            <path d="M7.00009 5.51126e-09C7.62831 -4.29406e-05 8.23273 0.250907 8.68936 0.70137C9.146 1.15183 9.42023 1.76766 9.45579 2.42252L9.45958 2.5679H13.4326C13.5764 2.56795 13.7148 2.62498 13.8199 2.72748C13.925 2.82999 13.9889 2.97031 13.9987 3.1201C14.0085 3.2699 13.9635 3.41799 13.8727 3.53446C13.782 3.65093 13.6522 3.72709 13.5098 3.74756L13.4326 3.75309H12.8302L11.8616 14.0405C11.813 14.5534 11.5915 15.0315 11.2365 15.3896C10.8814 15.7477 10.4161 15.9623 9.92347 15.9953L9.79028 16H4.20989C3.71607 16 3.23835 15.8166 2.86209 15.4827C2.48584 15.1488 2.23558 14.686 2.15603 14.1772L2.13862 14.0397L1.1692 3.75309H0.567575C0.43042 3.75308 0.297907 3.70122 0.194541 3.6071C0.0911757 3.51297 0.0239503 3.38296 0.00529734 3.24109L0 3.16049C5.78389e-06 3.01729 0.0496761 2.87894 0.139825 2.77102C0.229975 2.6631 0.354504 2.59291 0.490384 2.57343L0.567575 2.5679H4.5406C4.5406 1.88685 4.79972 1.2337 5.26096 0.752121C5.72221 0.270546 6.34779 5.51126e-09 7.00009 5.51126e-09ZM11.6898 3.75309H2.30965L3.26847 13.9236C3.2897 14.1505 3.38549 14.3628 3.53956 14.5244C3.69364 14.6859 3.89652 14.7869 4.11378 14.8101L4.20989 14.8148H9.79028C10.2443 14.8148 10.6295 14.479 10.7173 14.0231L10.7325 13.9236L11.689 3.75309H11.6898ZM8.32443 5.92593C8.46158 5.92593 8.5941 5.97779 8.69746 6.07191C8.80083 6.16604 8.86805 6.29606 8.8867 6.43793L8.892 6.51852V12.0494C8.89196 12.1995 8.83733 12.3441 8.73916 12.4538C8.64098 12.5635 8.50658 12.6302 8.36311 12.6404C8.21964 12.6506 8.0778 12.6036 7.96625 12.5089C7.8547 12.4141 7.78175 12.2787 7.76215 12.13L7.75685 12.0494V6.51852C7.75685 6.36135 7.81665 6.21063 7.92309 6.09949C8.02953 5.98836 8.1739 5.92593 8.32443 5.92593ZM5.67575 5.92593C5.8129 5.92593 5.94541 5.97779 6.04878 6.07191C6.15214 6.16604 6.21937 6.29606 6.23802 6.43793L6.24332 6.51852V12.0494C6.24328 12.1995 6.18865 12.3441 6.09047 12.4538C5.9923 12.5635 5.8579 12.6302 5.71443 12.6404C5.57096 12.6506 5.42912 12.6036 5.31757 12.5089C5.20602 12.4141 5.13307 12.2787 5.11347 12.13L5.10817 12.0494V6.51852C5.10817 6.36135 5.16797 6.21063 5.27441 6.09949C5.38085 5.98836 5.52522 5.92593 5.67575 5.92593ZM7.00009 1.18519C6.66772 1.1852 6.34751 1.31569 6.10302 1.55076C5.85853 1.78583 5.70763 2.10829 5.68029 2.45412L5.67575 2.5679H8.32443C8.32443 2.20118 8.1849 1.84948 7.93654 1.59017C7.68818 1.33086 7.35132 1.18519 7.00009 1.18519Z" fill="white" />
        </SvgIcon>
    );
}

export const TagsEdit = ({ data }) => {

    console.log(data, "hello")

    const [tags, setTags] = useState([...data]);

    console.log(tags, "hey")

    const [tagsField, setTagsField] = useState('');

    //handle change of tag name

    const handleChangeTagName = (e) => {
        setTagsField(e.target.value);
    }

    // handle click on add button in pre Req 
    const handleClickTags = () => {
        let values = [...tags];
        values.push({ name: tagsField });
        setTagsField('');
        setTags([...values]);
    }

    // handle deletion of tags

    const handleDeleteTags = (e, idx) => {
        let values = [...tags];
        values.splice(idx, 1);
        setTags([...values]);
    }

    return (
        <Form>
            <div className="all__tags">
                <div className="tags__edit">
                    Tags
                </div>
                <div className="tags__field">
                    <input onChange={e => handleChangeTagName(e)} value={tagsField} type="text" className='inputField' placeholder="Add a Tag" />
                    <AddIcon onClick={e => handleClickTags(e)} />
                </div>
            </div>
            <div className="tags__area">
                {tags.map((tag, idx) => {
                    if (idx >= 0) {

                        return (
                            <div className="tags__button">
                                <div className="tag__name">
                                    {tag.name}
                                </div>
                                <div className="delete__btn">
                                    <DeleteIcon onClick={e => handleDeleteTags(e, idx)} style={styles.btn} />
                                </div>
                            </div>
                        )
                    } else { return null }

                })}
            </div>
        </Form>
    )
}

const styles = {

    buttonIcon: {
        height: '1.1em',
        width: '1.3em',

    },
    btn: {
        backgroundColor: '#989898',
        borderBottomRightRadius: '24%',
        borderTopRightRadius: '24%',
        height: '1em',
        width: '1.2em',
        padding: '.15em'
    }
}
