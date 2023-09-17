import React from 'react'
import photo from '../assets/istockphoto-538889138-612x612 (1) 1.png'

function Missionvission() {
  return (
    <div className=" flex flex-col justify-center mx-auto  p-28  gap-16">
      <div className="flex mx-24">
        <img src={photo} alt="vission" className="w-1/3" />
        <div className=" p-28 ">
          <p className="font-thin text-4xl mb-8">Our Vission</p>
          <p className="font-thin text-xl mb-8">
            To offer the best storage solutions to Kenyans at affordable prices
            reducing post harvest loss significantly to fight food insecurity in
            kenya.
          </p>
        </div>
      </div>
      <div className="flex mx-24">
        <div className=" p-28 ">
          <p className="font-thin text-4xl mb-8">Our Mission</p>
          <p className="font-thin text-xl mb-8">
            To offer the best storage solutions to Kenyans at affordable prices
            reducing post harvest loss significantly to fight food insecurity in
            kenya.
          </p>
        </div>
        <img src={photo} alt="vission" className="w-1/3" />
      </div>
    </div>
  );
}

export default Missionvission