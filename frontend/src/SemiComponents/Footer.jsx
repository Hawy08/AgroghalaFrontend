import React from "react";


function Footer() {
  
  return (
    <div className="bg-[#23CE6B] w-full md:p-20 text-white text-sm md:my-4 p-4">
      <div className="md:grid grid-cols-3 flex flex-col gap-2 ">
        <div>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>Slack</p>
        </div>
        <div>
          <p>DuniAfrika Group</p>
          <p>Github</p>
        </div>
        <div>
          <p>Login</p>
          <p>Signup</p>
          <p>Feedback</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
