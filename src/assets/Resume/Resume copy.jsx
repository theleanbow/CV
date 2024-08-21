import React from "react";
import styles from "./Resume1.module.css"

function Resume1() {
  return (
    <div className={styles.body}>
      <div className="name flex justify-center">
        <h1 className="text-4xl font-bold p-10">Ujjwal Shrestha</h1>
      </div>
      <div className="details flex justify-center">
        <p>
          Phone:{" "}
          <a href="tel:+9779816426502" className="text-blue-500">
            {" "}
            9816426502
          </a>{" "}
          | Email:{" "}
          <a href="mailto:ujjwal7248@gmail.com" className="text-blue-500">
            ujjwal7248@gmail.com{" "}
          </a>{" "}
          | Github:{" "}
          <a href="httpss://github.com.theleanbow" className="text-blue-500">
            {" "}
            theleanbow{" "}
          </a>
        </p>
      </div>
      <div className="address flex justify-center">
        Address: Lalitpur-28, Nepal
      </div>
      <div className="workExperience pl-10 pr-10 ">
        <h3 className="text-3xl ">Work Experience </h3>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Apprentice Garage & Solutions Developer, Inspire Uvic</span>
            <span> Aug 2024 - Jan 2025</span>
          </li>

          <li className="pl-20">
            Collaborated with community partners to create a software for
            monitoring the progress of their works.{" "}
          </li>
          <li className="pl-20">
            Participated in workshops and training sessions, gaining hands-on
            experience in DevOps, API design, and agile project management
            methodologies.{" "}
          </li>
          <li className="pl-20">
            Collaborated with a multidisciplinary team to co-design and develop
            technology solutions addressing social, economic, and environmental
            challenges.
          </li>
        </div>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Data Entry and Management Volunteer, Micah Nepal </span>
            <span> May 2024</span>
          </li>

          <li className="pl-20">
            Updated the database of the Micah Nepal to ensure accurate,
            consistent and timely submission of relevant data and information..{" "}
          </li>
        </div>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Counselor, Tearfund Nepal </span>
            <span> Feb-Mar 2024</span>
          </li>

          <li className="pl-20">
            Prepared a comprehensive report summarizing the key change stories
            and learning drawn in the reports.{" "}
          </li>
          <li className="pl-20">
            Liaised with Tearfund's partner organizations to gather data to
            ensure accurate, consistent and timely submission of relevant data
            and information.{" "}
          </li>
        </div>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Software Coordinator, Tensor, IOE Thapathali </span>
            <span> Feb 2023-Feb 2024 </span>
          </li>

          <li className="pl-20">
            Fostered a collaborative environment by actively engaging with
            community members.{" "}
          </li>
          <li className="pl-20">
            Organized C programming workshop along with teammates for the
            first-year students{" "}
          </li>
        </div>

        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Project Manager, NHRPFDN  </span>
            <span> Nov 2022 - Dec 2023 </span>
          </li>

          <li className="pl-20">
          Supervised and
        worked along with other volunteers and members involved in producing
        audio books.{" "}
          </li>
          <li className="pl-20">
          Organized audio book distribution programs{" "}
          </li>
        </div>
      </div>




      <div className="Education pl-10 pr-10 ">
        <h3 className="text-3xl ">Education </h3>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>BEI, IOE Thapathali Campus</span>
            <span> 2019- Present</span>
          </li>

          <div className="pl-20">
          Relevant Skills: HTML,
          CSS, Javascript, Python, MySQL {" "}
          </div>
          
        </div>
      </div>


      <div className="Projects pl-10 pr-10 ">
        <h3 className="text-3xl ">Projects </h3>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span>Exploring Meta-Heuristic
            Algorithms for 5G Multi-Tier Radio Access Network Planning</span>
            {/* <span> Aug 2024 - Jan 2025</span> */}
          </li>

          <li className="pl-20">
          Evaluated and
          recommended optimal algorithms for 5G base station placement in Nepal.{" "}
      </li>
        </div>
        <div className=" pl-10 pr-10">
          <li className=" justify-between text-2xl pl-10 pr-10">
            <span> Website Development (Wordpress) </span>
            {/* <span> May 2024</span> */}
          </li>

          <li className="pl-20">
          Designed the website for the
      organization with the features of users, and different levels of
      permissions using WordPress CMS.{" "}
          </li>
        </div>
  
       

        
      </div>

    </div>
  );
}

export default Resume11;
