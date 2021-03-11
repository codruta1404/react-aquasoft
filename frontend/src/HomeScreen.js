import React, {useState} from 'react'
import { useHistory  } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Form, Card, Button } from 'react-bootstrap';
import {useSelector} from 'react-redux'

const HomeScreen = () => { 
    let history = useHistory();       
    const [users, setUsers] = useState({
        name: '',
        email:'',
        phone: '',
    })

    const [date, setDate] = useState(new Date())

    const [message, setMessage] = useState({
        date: new Date(),
        sender: '',
        receiver: '',
        message_content: '',
    })

    const onChangeUser = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const onChangeMessage = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`${users.name} sent the message to ${message.receiver}`)
        const my_data = {
            users: users,
            date: date,
            messages: message,
        }

        axios.post('http://localhost:5000/post', my_data)
    }


    const redirectHandler = () => {
        history.push('/messages')
    }
    return (
        <Card className="bg-dark text-white block-example border border-dark" style={{ width: '18rem', 'marginLeft': 'auto',
        'marginRight': 'auto' }}>
            <h2>Send a message</h2>
            <Form onSubmit={submitHandler}>
                <div>
                    <p>Data:</p>
                    <DatePicker  selected={date} 
                        onChange={date => setDate(date)}
                    />
                </div>

                <div>
                    <p>Name:</p>
                    <input type ='text' name='name' value={users.name} onChange={onChangeUser} />
                </div>

                <div>
                    <p>Email:</p>
                    <input type ='email' name='email' value={users.email} onChange={onChangeUser} />
                </div>

                <div>
                    <p>Phone:</p>
                    <input type ='text' name='phone' value={users.phone} onChange={onChangeUser} />
                </div>

                <div>
                    <p>Message Date:</p>
                    <input type ='text' name='date' value={message.date} onChange={onChangeMessage} />
                </div>

                <div>
                    <p>Sender:</p>
                    <input type ='text' name='sender' value={message.name} onChange={onChangeMessage} />
                </div>

                <div>
                    <p>Receiver:</p>
                    <input type ='text' name='receiver' value={message.receiver} onChange={onChangeMessage} />
                </div>

                <div>
                    <p>Content:</p>
                    <textarea type ='text' name='message_content' value={message.message_content} onChange={onChangeMessage}></textarea>
                </div>
                
                <Button style={{'marginRight': '20px'}} type='submit'>Submit</Button>
                <Button style={{'marginLeft': '35px'}} onClick={redirectHandler}>Messages Page</Button>
            </Form>
        </Card>
    )
}
export default HomeScreen