import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
         
            const response = await axios.get('your-api-endpoint');
            setUser(response.data); 
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    return (
        <div className="container">
            <h1>Profile Page</h1>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    
                </div>
            )}
        </div>
    );
}

export default Profile;