import cf from "../../assets/Images/My Projects/community-food.png";
import lwl from "../../assets/Images/My Projects/learn-with-learner.png";
import tcp from "../../assets/Images/My Projects/tech-connect.png";
import iww from "../../assets/Images/My Projects/wedding-world.png";
const Projects = () => {
  return (
    <section>
      <h2 className="text-5xl text-center mb-8">My Projects<span className=" text-7xl text-cyan-400">.</span></h2>
      <div className=" container mx-auto md:grid md:grid-cols-2  p-8 gap-8 h-full">
        <div className="card bg-[#111132] shadow-xl">
          <figure>
            <img
              src={cf}
              alt="Community Food Bridge"
            />
          </figure>
          <div className=" p-4">
            <div className=" mt-2 flex gap-2 justify-center">
              <div className="badge badge-accent  font-bold">REACT</div>
              <div className="badge badge-accent  font-bold">MongoDB</div>
              <div className="badge badge-accent  font-bold">Firebase</div>
              <div className="badge badge-accent  font-bold">Node.js</div>
            </div>
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Community Food Bridge
              </h2>
              <p>This is Food Sharing Website. Where anyone can donate food and get food who need. User also can donate money.</p>
              <div className="card-actions my-4">
                <a href="https://community-food-bridge.web.app" className="btn btn-outline btn-accent">Live Link</a>
                <a href="https://github.com/mdshakil04/community-food-bridge-client" className="btn btn-outline btn-accent">Code Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-[#111132] shadow-xl">
          <figure>
            <img
              src={lwl}
              alt="Learn With Learners"
            />
          </figure>
          <div className=" p-4">
            <div className=" mt-2 flex gap-2  justify-center">
              <div className="badge badge-success text-gray font-bold">REACT</div>
              <div className="badge badge-success text-gray font-bold">MongoDB</div>
              <div className="badge badge-success text-gray font-bold">Firebase</div>
              <div className="badge badge-success text-gray font-bold">Node.js</div>
            </div>
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Learn With Learners
              </h2>
              <p>Its a online course related website. Where any instructor can apply for teaching and student can enroll their desire courses.</p>
              <div className="card-actions my-4">
                <a href="https://learn-with-learners.web.app/" className="btn btn-outline btn-success">Live Link</a>
                <a href="https://github.com/mdshakil04/learn-with-learners-client" className="btn btn-outline btn-success">Code Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-[#111132] shadow-xl">
          <figure>
            <img
              src={tcp}
              alt="Tech Connect Pro"
            />
          </figure>
          <div className=" p-4">
            <div className=" mt-2 flex gap-2  justify-center">
              <div className="badge badge-neutral bg-blue-600  p-2 font-bold">REACT</div>
              <div className="badge badge-neutral bg-blue-600 p-2 font-bold">MongoDB</div>
              <div className="badge badge-neutral bg-blue-600 p-2 font-bold">Firebase</div>
              <div className="badge badge-neutral bg-blue-600 p-2 font-bold">Node.js</div>
            </div>
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Tech Connect Pro
              </h2>
              <p>It is a e-commerce website of tech product. where any one by product, and admin can add, delete, or update their product.</p>
              <div className="card-actions mt-12">
                <a href="https://tech-connect-pro.web.app" className="btn btn-outline text-white btn-neutral">Live Link</a>
                <a href="https://github.com/mdshakil04/tech-connect-pro-client" className="btn text-white btn-outline btn-neutral">Code Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-[#111132] shadow-xl">
          <figure>
            <img
              src={iww}
              alt="Island Wedding World"
            />
          </figure>
          <div className=" p-4">
            <div className=" mt-2 flex gap-2  justify-center">
              <div className="badge badge-secondary  font-bold">REACT</div>
              <div className="badge badge-secondary  font-bold">MongoDB</div>
              <div className="badge badge-secondary  font-bold">Firebase</div>
              <div className="badge badge-secondary  font-bold">Node.js</div>
            </div>
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Island Wedding World
              </h2>
              <p>This is wedding events website. Where any one can reserve their wedding destination, decoration, catering services and tranfortation.</p>
              <div className="card-actions my-4">
                <a href="https://island-wedding-world.web.app" className="btn btn-outline btn-secondary">Live Link</a>
                <a href="https://github.com/mdshakil04/island-wedding-world" className="btn btn-outline btn-secondary">Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
<h2 className="text-5xl">My All Projects</h2>;
