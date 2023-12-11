const Projects = () => {
  return (
    <section>
      <h2 className="text-5xl text-center mb-8">My Projects</h2>
      <div className=" container mx-auto md:grid md:grid-cols-2 gap-4">
        <div className="card border-2 w-auto card-side">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className=" flex flex-col justify-center">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="">
              <button className="btn btn-outline mr-4 btn-primary">Watch</button>
              <button className="btn btn-outline btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card border-2 w-auto card-side">
          <figure className=" ">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className=" flex flex-col justify-center">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className=" ">
              <button className="btn btn-outline mr-4 btn-primary">Watch</button>
              <button className="btn btn-outline btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
<h2 className="text-5xl">My All Projects</h2>;
