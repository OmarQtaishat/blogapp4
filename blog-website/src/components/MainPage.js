import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            
            const response = await axios.get('your-api-endpoint');
            setBlogs(response.data); 
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    return (
        <div className="container">
            <h1>Main Page</h1>
            <div>
                {blogs.map(blog => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;