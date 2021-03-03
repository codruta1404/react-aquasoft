import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

const HomeScreen = () => {        
    const [users, setUsers] = useState({
        name: '',
        email:'',
        phone: '',
    })

    const date = new Date()

    const [message, setMessage] = useState({
        date: new Date(),
        sender: '',
        receiver: '',
        content: '',
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
        const my_data = {...users, ...date, ...message}

        const my_post = axios.post('http://localhost:5000/post', JSON.stringify(my_data))
        console.log(my_post)
    }

    return (
        <Card style={{width: '18rem'}}>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Data:</p>
                    <DatePicker
                        name='date'
                        selected={date}
                        // onChange={onChangeUser}
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
                    <textarea type ='text' name='content' value={message.content} onChange={onChangeMessage}></textarea>
                </div>
                
                <button type='submit'>Submit</button>
            </form>
        </Card>
    )
}
export default HomeScreen