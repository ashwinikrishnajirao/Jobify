import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../Components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`https://jobify-backend-tvz7.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type === "application/pdf") {
      setPdfFile(file);
      Swal.fire(`Entered PDF: ${file.name}`);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleSubmit = () => {
    Swal.fire("Your application has been submitted.");
    setPdfFile(null);
  };

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 l:px-24 px-4">
        <PageHeader title={"Single Job Page"} path={"single job"} />
        <h2>JobDetails: {id}</h2>
        <div className="bg-black/55 rounded text-white justify-center px-4 py-2">
        <h1>Title: {job.jobTitle}</h1>
        <h1>Company: {job.companyName}</h1>
        <h1>Salary Range: {job.minPrice}-{job.maxPrice}k</h1>
        <h1>Location: {job.jobLocation}</h1>
        <h1>Posting Date: {job.postingDate}</h1>
        <h1>Experience Level: {job.experiencelevel}</h1>
        <h1>Employement Type: {job.employementType}</h1>
        <h1>Roles and Responsibilities: {job.description}</h1>
        <h1>Posted By: {job.postedBy}</h1>
        </div>
      </div>
      <div className="max-w-screen-2xl mt-4 mx-auto xl:px-24 l:px-24 px-4">
        <h1 className="text-blue text-lg">Upload Your Resume To Apply</h1>
        <input type="file" accept=".pdf" onChange={handleFileChange} />

        {pdfFile && ( 
          <div>
            <p>Selected PDF: {pdfFile.name}</p>
            <button
              className="bg-blue px-8 py-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
