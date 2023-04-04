import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () =>{
const [user, setUser] = useState(null);

useEffect(() => {
    const fetchUser = async () => {
        const token = getToken();
        const response = await axios.get('http://localhost:3001/profile', {headers: {Authorization: 'Bearer ${token}' } });
        setUser(response.data.user);
    };
    fetchUser();
}, []);

if (!user) {
    return <div> Loading...</div>
}

return (
    <div>
        <h2> Welcome, {user.name} </h2>
        <p> Email: {user.email}</p>
        <p> Phone: {user.phone}</p>
    </div>
);
};