import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Resume.module.css";

function Resume() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/personal_info")
      .then((response) => setDetails(response.data))
      .catch((err) => console.log(err));
  }, []);

  const [Education, setEducation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/education")
      .then((response) => setEducation(response.data))
      .catch((err) => console.log(err));
  }, []);

  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/projects")
      .then((response) => setProjects(response.data))
      .catch((err) => console.log(err));
  }, []);
  const [WorkExperience, setWorkExperience] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/work_experience")
      .then((response) => setWorkExperience(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.body}>
      <div className="name flex justify-center">
        <div className="text-4xl font-bold p-5">{Details.name}</div>
      </div>
      <div className="details flex justify-center">
        <p>
          Phone:{" "}
          <a href={`tel:+977${Details.phone}`} className="text-blue-500">
            {" "}
            {Details.phone}
          </a>{" "}
          | Email:{" "}
          <a href={`mailto:${Details.email}`} className="text-blue-500">
            {Details.email}{" "}
          </a>{" "}
          | Github:{" "}
          <a
            href={`https://github.com.${Details.github}`}
            className="text-blue-500"
          >
            {" "}
            {Details.github}{" "}
          </a>
        </p>
      </div>
      <div className="address flex justify-center">
        Address: {Details.address}
      </div>
      <div className="workExperience pl-5 pr-5 ">
        <h3 className="font-bold ">Work Experience </h3>
        <hr className="border-black pr-5" />
        <div className=" pl-5 pr-5">
          {WorkExperience.map((item, index) => (
            <li key={index} className=" justify-between  pl-5">
             
                <span className="font-bold italic ">
                  
                  {item.position}, {item.company}
                </span>
                <span className=" italic">
                 {item.start_date}-{item.end_date}
                </span>
              

              {item.responsibilities.map((repons, index) => (
                <div className="div">
                  <li className="pl-10 list-disc">{repons}</li>
                </div>
              ))}
            </li>
          ))}
        </div>
      </div>

      <div className="Education pl-5 pr-5 ">
        <h3 className="font-bold ">Education </h3>
        <hr className="border-black pr-5" />
        <div className=" pl-5 pr-5">
          <div className=" flex justify-between  ">
            <span className="font-bold italic">{Education.degree}</span>
            <span className="italic">
              {" "}
              {Education.start_year}- {Education.end_year}
            </span>
          </div>
          <div className=" justify-between  pr-5">
            <b>Relevant Skills: </b>
            {Education.relevant_skills}
          </div>
        </div>
      </div>

      <div className="Projects pl-5 pr-5 ">
        <h3 className="font-bold ">Projects </h3>
        <hr className="border-black pr-5" />
        <div className=" pl-5 pr-5">
          {Projects.map((item, index) => (
            <li key={index} className=" justify-between  pl-5 ">
              <span className="font-bold italic">{item.title}</span>
              <ul>

                <div className="pl-10">

                <li className=" list-disc">
                  {item.description}
                                   
                  </li>
                </div>
              </ul>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
