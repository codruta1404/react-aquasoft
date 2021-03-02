import React, {Component} from 'react'
import { Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

class HomeScreen extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            username: '',
            email:'',
            phone: '',
            message_date: new Date(),
            sender: '',
            receiver: '',
            content: '',
        }
    }

    changeDataHandler = (event) => {
        this.setState({data: event});
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});

    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(`${this.state.username} sent the message to ${this.state.receiver}`)
        axios.post('http://localhost:5000/post', JSON.stringify(this.state))
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

      render() {
        const { data, username, email, phone, message_date, sender, receiver, content} = this.state
        return (
            <Card style={{width: '18rem'}}>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <p>Data:</p>
                        <DatePicker
                            selected={data}
                            onChange={this.changeDataHandler}
                        />
                    </div>

                    <div>
                        <p>Username:</p>
                        <input type ='text' name='username' value={username} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Email:</p>
                        <input type ='text' name='email' value={email} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Phone:</p>
                        <input type ='text' name='phone' value={phone} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Message Date:</p>
                        <input type ='text' name='message_date' value={message_date} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Sender:</p>
                        <input type ='text' name='username' value={username} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Receiver:</p>
                        <input type ='text' name='receiver' value={receiver} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <p>Content:</p>
                        <textarea type ='text' name='content' value={content} onChange={this.changeHandler}></textarea>
                    </div>
                    
                    <button type='submit'>Submit</button>
                </form>
            </Card>
        );
      }
}

export default HomeScreen