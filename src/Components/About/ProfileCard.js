import React from 'react'
import Card from 'react-bootstrap/Card'

import '../../Styles/ProfileCard.css'

export const ProfileCard = ({ Image, Name, Branch, Role }) => {
    return (
        <Card>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{Name}</Card.Title>
                <div className="body">
                    <Card.Text>
                        {Branch}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                        {Role}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
