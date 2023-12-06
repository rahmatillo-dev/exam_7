

function Courses() {
  return (
    <>
      <div className=" container mx-auto flex items-center justify-center gap-[50px] mt-[109px] mb-[50px]">
        <h1 className="w-[748px] font-medium text-4xl">UI/UX Design Course</h1>
        <p className=" w-[748px] text-lg">
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>
      <div>
        <hr />
        <iframe
          className=" container mx-auto mt-[50px]"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Xu8SbsjGXjQ?si=-0iNA8AgbCUQtraj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container mx-auto flex items-center justify-center gap-3 mt-10">
        <div className=" container mx-auto w-[783px] bg-white p-6">
          <div>
            <h1 className=" text-right font-bold text-5xl mb-[40px]">01</h1>
            <h2 className=" mb-[40px]">Introduction to UI/UX Design</h2>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500">
            <div>
              <p className=" font-medium text-base">
                Understanding UI/UX Design Principles
              </p>
              <p>Lesson 01</p>
            </div>
            <div>⏲45 Minutes</div>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500 mt-5">
            <div>
              <p className=" font-medium text-base">
                Importance of User-Centered Design
              </p>
              <p>Lesson 02</p>
            </div>
            <div>⏲45 Minutes</div>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500 mt-5">
            <div>
              <p className=" font-medium text-base">
                The Role of UI/UX Design in Product Development
              </p>
              <p>Lesson 03</p>
            </div>
            <div>⏲45 Minutes</div>
          </div>
        </div>
        <div className=" container mx-auto w-[783px] bg-white p-6">
          <div>
            <h1 className=" text-right font-bold text-5xl mb-[40px]">02</h1>
            <h2 className=" mb-[40px]">User Research and Analysis </h2>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500">
            <div>
              <p className=" font-medium text-base">
                Conducting User Research and Interviews
              </p>
              <p>Lesson 01</p>
            </div>
            <div>⏲1 Hour</div>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500 mt-5">
            <div>
              <p className=" font-medium text-base">
                Analyzing User Needs and Behavior
              </p>
              <p>Lesson 02</p>
            </div>
            <div>⏲1 Hour</div>
          </div>
          <div className="flex items-center justify-between p-8 border rounded-sm shadow-xs border-yellow-500 mt-5">
            <div>
              <p className=" font-medium text-base">
                The Role of UI/UX Design in Product Development
              </p>
              <p>Lesson 03</p>
            </div>
            <div>⏲45 Minutes</div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Courses
