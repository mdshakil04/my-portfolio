import cf from "../../assets/Images/My Projects/BookSwiftly.png";
import lwl from "../../assets/Images/My Projects/learn-with-learner.png";
import tcp from "../../assets/Images/My Projects/tech-connect.png";
import iww from "../../assets/Images/My Projects/wedding-world.png";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section>
      <h2 className="text-5xl text-center mb-8">My Projects<span className=" text-7xl text-cyan-400">..</span></h2>
      <div className=" container mx-auto lg:flex md:grid md:grid-cols-2  p-8 gap-8 h-full">
        <motion.div 
        whileHover={{
          scale:1.05,
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}
        className="card  mb-4 shadow-xl">
          <figure>
            <img
              src={cf}
              alt="Book Swiftly"
            />
          </figure>
          <div
          className=" p-4">
            {/* <div className=" mt-2 flex gap-2 justify-center">
              <div className="badge badge-accent  font-bold">REACT</div>
              <div className="badge badge-accent  font-bold">MongoDB</div>
              <div className="badge badge-accent  font-bold">Firebase</div>
              <div className="badge badge-accent  font-bold">Node.js</div>
            </div> */}
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Book Swiftly
              </h2>
              <p>Book Swiftly is a user-friendly online booking platform tourist. It allows easy appointment scheduling, real-time updates, and supports multiple services.</p>
              <div className="card-actions my-4">
                <a href="https://book-swiftly.web.app/" className="btn btn-outline btn-accent">Live Link</a>
                <a href="https://github.com/mdshakil04/learn-with-learners-client" className="btn btn-outline btn-accent">Code Link</a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        whileHover={{
          scale:1.05,
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}
        className="card  mb-4 shadow-xl">
          <figure>
            <img
              src={lwl}
              alt="Learn With Learners"
            />
          </figure>
          <div className=" p-4">
            {/* <div className=" mt-2 flex gap-2  justify-center">
              <div className="badge badge-success text-gray font-bold">REACT</div>
              <div className="badge badge-success text-gray font-bold">MongoDB</div>
              <div className="badge badge-success text-gray font-bold">Firebase</div>
              <div className="badge badge-success text-gray font-bold">Node.js</div>
            </div> */}
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
       </motion.div>
        {/* <motion.div 
        whileHover={{
          scale:1.05,
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}
        className="card  mb-4 shadow-xl">
          <figure>
            <img
              src={tcp}
              alt="Tech Connect Pro"
            />
          </figure>
          <div className=" p-4">
            <div className=" mt-4">
              <h2 className="card-title text-3xl">
                Tech Connect Pro
              </h2>
              <p>It is a e-commerce website of tech product. where any one by product, and admin can add, delete, or update their product.</p>
              <div className="card-actions mt-12">
                <a href="https://tech-connect-pro.web.app" className="btn btn-outline  btn-neutral">Live Link</a>
                <a href="https://github.com/mdshakil04/tech-connect-pro-client" className="btn  btn-outline btn-neutral">Code Link</a>
              </div>
            </div>
          </div>
        </motion.div> */}
        <motion.div 
        whileHover={{
          scale:1.05,
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}
        className="card  mb-4 shadow-xl">
          <figure>
            <img
              src={iww}
              alt="Island Wedding World"
            />
          </figure>
          <div className=" p-4">
            {/* <div className=" mt-2 flex gap-2  justify-center">
              <div className="badge badge-secondary  font-bold">REACT</div>
              <div className="badge badge-secondary  font-bold">MongoDB</div>
              <div className="badge badge-secondary  font-bold">Firebase</div>
              <div className="badge badge-secondary  font-bold">Node.js</div>
            </div> */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
<h2 className="text-5xl">My All Projects</h2>;
