import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';

function GhalaView() {
  const [ghalas, setGhalas] = useState([]);
  const [selectedGhala, setSelectedGhala] = useState(null);
  const [sokos, setSokos] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch Ghalas
    axiosInstance.get('/ghalas/')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setGhalas(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching Ghala data:', error);
      });

    // Fetch Sokos
    axiosInstance.get('/sokos/')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSokos(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching Soko data:', error);
      });

    // Fetch Blogs
    axiosInstance.get('/blogs/')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching Blog data:', error);
      });
  }, []);

  const openModal = (ghala) => {
    setSelectedGhala(ghala);
  };

  const closeModal = () => {
    setSelectedGhala(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ghalas</h2>
            <div className="lg:flex lg:flex-wrap">
              {ghalas.map((ghala, index) => (
                <div key={index} className="lg:w-1/2 mb-4 lg:pr-4">
                  <div className="border p-4 rounded-lg shadow-md cursor-pointer" onClick={() => openModal(ghala)}>
                    <div className="lg:flex">
                      <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                        <img
                          src={ghala.images} // Replace with the actual image URL
                          alt={ghala.ghala_name}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <h3 className="text-lg font-semibold">{ghala.ghala_name}</h3>
                        <p className="text-gray-600 line-clamp-4">
                          {ghala.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="lg:w-1/3">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sokos</h2>
            {sokos.map((soko, index) => (
              <div key={index} className="mb-4">
                <div className="border p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{soko.commodity}</h3>
                  <p className="text-green-600">{soko.price}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
            {blogs.map((blog, index) => (
              <div key={index} className="mb-4">
                <div className="border p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-gray-600 line-clamp-4">{blog.content}</p>
                </div>
              </div>
            ))}
          </section>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">View All Blogs</button>
        </div>
      </div>
      {selectedGhala && (
        <div className="p-24 sm:p-6 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{selectedGhala.ghala_name}</h2>
            <p className="text-greeen-600">Know us</p>
            <p className="text-gray-600">{selectedGhala.description}</p>
            <br />
            <p className="text-gray-600">Phone number: {selectedGhala.phone_number}</p>
            <p className="text-gray-600">Email: {selectedGhala.email}</p>
            <p className="text-gray-600">Start at: Ksh {selectedGhala.start_price}</p>
            <p className="text-gray-600">Rent at: Ksh {selectedGhala.rent_price} per month per 90kg bag</p>
            <div className="px-12 mt-4 flex justify-end">
              
              <button className="px-3 text-gray-600 hover:text-black" onClick={closeModal}>Close</button>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Rent</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GhalaView;
