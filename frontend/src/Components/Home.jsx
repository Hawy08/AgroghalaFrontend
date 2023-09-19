import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Missionvission from "./Missionvission";
import CustomizedAccordions from "./Accorion";
import Blogs from "./bloglist";
import Footer from "../SemiComponents/footer";
import axiosInstance from '../axios'; 
import MainImage from '../assets/main.jpg';
import BackgroundImage from '../assets/mission.jpg';


function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the access token is present in localStorage
    const accessToken = localStorage.getItem('access_token');
    const isAuthenticated = !!accessToken; // Check if the token exists
    setIsLoggedIn(isAuthenticated);
  }, []);

  useEffect(() => {
    // Fetch a list of blogs from your backend
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs/'); // Replace with your API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to randomly select 3 blogs from the list
  const getRandomBlogs = () => {
    const shuffledBlogs = [...blogs];
    for (let i = shuffledBlogs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledBlogs[i], shuffledBlogs[j]] = [shuffledBlogs[j], shuffledBlogs[i]];
    }
    return shuffledBlogs.slice(0, 3);
  };

  const randomBlogs = getRandomBlogs();

  const handleLogout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('access_token');

    // Redirect to the login or home page (you can adjust this as needed)
    window.location.href = '/logout';
    window.location.href = '/login'; // Redirect to the login page after logout
  };

  return (
    <div>

      {/* Navigation */}
      <nav className="bg-white text-green-500 py-2 mx-0 border-b-2 border-">
        <div className="mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold">AgroGhala</h1>
        </div>
          <div>
          {isLoggedIn ? (
              <button onClick={handleLogout} className="text-lg font-semibold">Logout</button>
            ) : (
              <>
                <a href="/login" className="text-lg font-semibold mr-6">Login</a>
                <a href="/signup" className="text-lg font-semibold">Sign Up</a>
              </>
            )}
          </div>
        </div>
      </nav>
        <Header />
      <section className='bg-green-500 text- white grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <img src={BackgroundImage} alt="" />
                <h3>
                    Our Vision
                  </h3>
                  <p>
                  To create a world where every farmer in Sub-Saharan Africa thrives, their harvests preserved, their families nourished, and their potential unlocked.  
                  </p>
            </div>
        </div>
        <div>
            <img src={MainImage} alt="" />
            <div>
              <h3>
                Our Mission
              </h3>
              <p>
              At AgroGhala, our mission is to empower Sub-Saharan African farmers with the tools, knowledge, and resources they need to overcome the challenges of Post Harvest Loss (PHL) and poverty. Through accessible and affordable storage solutions, innovative strategies to combat PHL, and direct market access, we aim to revolutionize the agricultural landscape.
              </p>
            </div>
        </div>
      </section>

      {/* Listed Blogs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {randomBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600">{blog.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


export default HomePage;
