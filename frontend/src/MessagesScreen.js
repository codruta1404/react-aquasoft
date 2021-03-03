import axios from 'axios'
import React, {useEffect, useState} from 'react'

const MessagesScreen = () => {
    const[messages, setmessages] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(
              'http://localhost:5000/',
            );
       
            setmessages(result.data);
            console.log(result.data);
          };
       
          fetchData();
    }, []);

    return (
        <div>
            <h1>Messages:</h1>    
            <ul>
                {messages.map((message, index) => (
                <li key={index}>
                    {message.messages.sender} {message.messages.receiver}
                </li>
                ))}
            </ul>   
        </div>

     );
}

export default MessagesScreen
