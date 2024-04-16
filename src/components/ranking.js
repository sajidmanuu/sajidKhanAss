
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./rank.css";
import { faAngleDown, faArrowRight, faDownload, faIndianRupee, faDownLeftAndUpRightToCenter, faCheck, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Ranking = () => {
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("rankData.json")
      .then(response => response.json())
      .then(data => {
        setRankData(data);
        console.log('Fetched data:', data) // Log fetched data
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  console.log('rankData:', rankData); // Log rankData state


  return (
    <div className="container-fluid d-flex flex-wrap">
      <h2>University Ranking</h2>
      <table className="table">
        <thead style={{ backgroundColor: "#53bced" }}>
          <tr>
            <th>CD Rank</th>
            <th>Colleges</th>
            <th>Course Fees</th>
            <th>Placement</th>
            <th>User Reviews</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {rankData.map((item, index) => (
            <tr key={index}>
              <td>{item.rank}</td>
              <td>
                {/* Render college details */}
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img src={item.collegeLogo} height={50} width={50} alt="College Logo" />
                    <div className="mx-2">
                      <strong style={{ color: "rgb(119 211 234)" }}>{item.collegeName}</strong>
                      <br />
                      <small>{item.location}</small>
                    </div>
                  </div>
                  <div className="course d-flex flex-column p-1 my-2" style={{ background: "#ffe396", border: "none", borderLeft: "2px solid #ff9b46", width: "60%", marginLeft: "40px" }}>
                    <strong style={{ color: "#ff9b46" }}>{item.courseName} <FontAwesomeIcon icon={faAngleDown} className="mx-2" /></strong>
                    <strong>{item.cutoff}</strong>
                  </div>
                  <div className="btn d-flex" style={{ justifyContent: "space-between" }}>
                    <div><Link to="" style={{ color: "#ff9b46" }}> <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ff9b46" }} /> Apply Now</Link></div>
                    <div><Link to="" style={{ color: "rgb(119 211 234)" }}> <FontAwesomeIcon icon={faDownload} style={{ color: "rgb(119 211 234)" }} /> Download Broucher</Link></div>
                    <div><input type="checkbox" className="mx-2" /><label className="text-dark"> Add to Compare</label></div>
                  </div>
                </div>
              </td>
              <td>
                {/* Render course fees */}
                <div className="d-flex flex-column">
                  <div style={{ color: "rgb(119 211 234)" }}>
                    <FontAwesomeIcon icon={faIndianRupee} className="mx-2" />
                    {item.fees}
                  </div>
                  <strong>BE/B.tech</strong>
                  <strong>First year Fees</strong>
                  <strong style={{ color: "#ff9b46" }}><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /> Compare Fees</strong>
                </div>
              </td>
              <td>
                {/* Render placement details */}
                <div className="d-flex flex-column">
                  <div style={{ color: "rgb(119 211 234)" }}>
                    <FontAwesomeIcon icon={faIndianRupee} className="mx-2" />
                    {item.avgPackage}
                  </div>
                  <p>Average Package</p>
                  <div style={{ color: "rgb(119 211 234)" }}>
                    <FontAwesomeIcon icon={faIndianRupee} className="mx-2" />
                    {item.highestPackage}
                  </div>
                  <p>Highest Package</p>
                  <strong>First year Fees</strong>
                  <strong style={{ color: "#ff9b46" }}><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /> Compare Placement</strong>
                </div>
              </td>
              <td>
                {/* Render user reviews */}
                <div className="d-flex text-center" style={{ alignItems: "center" }}>
                  <div style={{ backgroundColor: "#ff9b46", height: "8px", width: "8px", borderRadius: "50%" }}></div>
                  <p className="mx-2">{item.userRating}</p>
                </div>
                <small>{item.userReviews}</small> <br />
                <small className="rounded" style={{ background: "#faafaf", color: "#ff2626" }}>
                  <FontAwesomeIcon icon={faCheck} className="mx-2" /> Best in Social Life <FontAwesomeIcon icon={faAngleDown} className="mx-2" />
                </small>
              </td>
              <td>
                {/* Render ranking info */}
                <div className="d-flex flex-column">
                  <p>{item.rankingInfo}</p>
                  <div className="course d-flex flex-column p-1 my-2" style={{ background: "#dcfcf9", border: "none", borderLeft: "2px solid #00d9c4", width: "60%", marginLeft: "40px" }}>
                    <strong style={{ color: "#00d9c4" }}>
                      <FontAwesomeIcon icon={faUser} className="profile-icon" />
                      <FontAwesomeIcon icon={faUser} className="profile-icon" style={{ marginLeft: "-15px", zIndex: "1" }} />
                      <FontAwesomeIcon icon={faUser} className="profile-icon" style={{ marginLeft: "-15px", zIndex: "2" }} />
                      <span className="mx-2"> + 9 more</span>
                    </strong>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;

