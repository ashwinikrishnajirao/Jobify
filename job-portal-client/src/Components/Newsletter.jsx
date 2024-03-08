import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (file) => {
    if (file.type === "application/pdf") {
      setPdfFile(file);
      Swal.fire(`Entered PDF: ${file.name}! Thank You`);
    } else {
      alert("Please upload a PDF file.");
    }
  };
  
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf";
    input.onchange = (event) => {
      const file = event.target.files[0];
      handleFileChange(file);
    };
    input.click();
  };
  
  

  const handleSubmit = () => {
    if (email.trim() !== "") {
      Swal.fire("Congratulations! You're Subscribed");
    } else {
      // You can display an error message or handle empty email case here
      console.log("Email is empty");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Subscribe To Newsletter
        </h3>
        <p className="text-primary/75 text-base">
          Subscribe to our newsletter to get faster updates and personalized job postings!!!
          <br/>
          <br/>
        </p>

        <div className="w-full space-y-4 ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
            onClick={handleSubmit}
            required
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base">
          Upload Your Resume To get notified faster, based on your skills.
         
          
        </p>

        <div className="w-full space-y-4 mt-5">
          <input type="submit" value={"Upload your resume"}  className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold" onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
