import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Course from "../components/course";
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
          <button>
            <Link to="/course" component={Course} property={course}>
              View
            </Link>
          </button>
        </div>
      ))}
    </>
  );
}

export default Home;
