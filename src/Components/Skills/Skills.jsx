import React from "react";

const Skills = () => {
  return (
    <section className=" container mx-auto text-center">
        <h2 className="text-5xl text-center border-y-4 lg:ml-56 w-3/4 my-4">My Skills</h2>
      <div className=" md:flex gap-8 justify-center">
        <div className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">Web Development</h2>
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">Cyber Security</h2>
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
