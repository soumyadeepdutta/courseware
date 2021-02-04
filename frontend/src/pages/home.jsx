import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import instance from "../axios";

function Home() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const result = await instance.get("/courses");
      setCourses(result.data);
    };
    getCourses();
  }, []);
  return (
    <>
      {courses.map((course) => (
        <div>
          {course.name}
          <button onClick={() => { window.location ="/Course"}}>
            
            View
              
            
          </button>
        </div>
      ))}
    </>
  );
}

export default Home;
