import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.png";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      InternshipID: 1,
      InternshipTitle: "Software Engineer",
      Areafield: "Development",
      CandidatesApplied: 20,
      company: "Tech Corp",
      location: "Sathyamangalam",
      logo: pic1,
    },
    {
      InternshipID: 2,
      InternshipTitle: "Product Manager",
      Areafield: "Development",
      CandidatesApplied: 20,
      company: "Innovate Ltd",
      location: "Chennai",
      logo: pic2,
    },
    {
      InternshipID: 3,
      InternshipTitle: "Data Analyst",
      Areafield: "Data Science",
      CandidatesApplied: 20,
      company: "DataWorks",
      location: "Salem",
      logo: pic3,
    },
    {
      InternshipID: 4,
      InternshipTitle: "UI UX",
      Areafield: "Designer",
      CandidatesApplied: 20,
      company: "BIT",
      location: "Erode",
      logo: pic4,
    },
  ]);

  return (
    <div className="dashboard-container">
      {data.map((job) => (
        <div className="card-div" key={job.InternshipID}>
          <div className="card-header">
            <div className="card-title-div">
              <p className="card-title">{job.InternshipTitle}</p>
              <img
                src={job.logo}
                alt="Logo"
                style={{ width: "30%", height: "70px", borderRadius: "50%" }}
              />
            </div>
          </div>

          <hr className="card-divider" />

          <div className="card-details">
            <div className="card-detail-item">
              <span className="detail-label">Internship ID :</span>
              <span className="detail-value">{job.InternshipID}</span>
            </div>
            <div className="card-detail-item">
              <span className="detail-label">Internship Title :</span>
              <span className="detail-value">{job.InternshipTitle}</span>
            </div>
            <div className="card-detail-item">
              <span className="detail-label">Company :</span>
              <span className="detail-value">{job.company}</span>
            </div>
            <div className="card-detail-item">
              <span className="detail-label">Location :</span>
              <span className="detail-value">{job.location}</span>
            </div>
            <div className="card-detail-item">
              <span className="detail-label">Area/Field :</span>
              <span className="detail-value">{job.Areafield}</span>
            </div>
            <div className="card-detail-item">
              <span className="detail-label">Candidates Applied :</span>
              <span className="detail-value">{job.CandidatesApplied}</span>
            </div>
          </div>

          <div className="card-footer">
            <button className="apply-now-btn">Apply Now</button>
            <button className="view-details-btn">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
