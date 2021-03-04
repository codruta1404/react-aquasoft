import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Card, Button} from 'react-bootstrap'

const MessagesScreen = () => {
    const[messages, setMessages] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(
              'http://localhost:5000/',
            );
       
            setMessages(result.data);
            console.log(result.data);
          };
       
          fetchData();
    }, []);

    const getList = () => {
        fetch('http://localhost:5000/').then((res) => {
            res.json().then((resp) => {
                setMessages(resp)
            })
        })
    }

    const fetchDelete = (userid) => {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:5000/delete/' + userid, {
                method: 'DELETE',
                })
                .then(res => {
                    res.json()
                    getList()}) 
                .then(res => console.log(res))
        }
    }

    const renderCards = (card, index) => {
        return (
            <Card className="bg-dark text-white block-example border border-dark" style={{ width: '23rem', 'margin-left': '10px' }} key={index}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Sender: {card.sender}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Receiver: {card.receiver}</Card.Subtitle>
                <Card.Text>{card.message_content}</Card.Text>
            </Card.Body>
        </Card>
        )
    }
    return (
        <div className='row'>
            {messages.map((x,i) =>{
            return (
                <div key={i}>
                <ul>
                    {x.messages.map(renderCards)}
                    <div style={{ display: "flex" }}>
                        <Button style={{ marginRight: "auto" }} onClick={() => fetchDelete(x._id)} variant="primary">Delete</Button>
                    </div>
                </ul>
                </div>  
            )
            })} 
        </div>
    )
}

export default MessagesScreen
