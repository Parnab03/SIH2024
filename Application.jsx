import React from "react";
import "./ApplicationForm.css";
import Hr from "./Hr";
import Submitbutton from "./Submitbutton";

function Application ()  {
  return (
    <div>
      <h1>Application Form</h1>
      <form action="">
        <div className="row">
          <div className="input-group">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Middle Name">Middle Name</label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Last Name">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div className="input-group">
            <label htmlFor="StudentId">Student ID</label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              placeholder="studentId"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="Gender">Gender</label>
            <input type="text" name="gender" id="gender" placeholder="gender" />
          </div>
          <div className="input-group">
            <label htmlFor="Nationality">Nationality</label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              placeholder="nationality"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Religion">Religion</label>
            <input
              type="text"
              name="religion"
              id="religion"
              placeholder="religion"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="address">Permanent Home Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="District/Region">District/Region</label>
            <input type="text" name="region" id="region" placeholder="region" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="Mobile Number">Mobile Number</label>
            <input type="number" name="mobile" id="mobile" placeholder="+91" />
          </div>
          <div className="input-group">
            <label htmlFor="Alternative Mobile number">
              Alternative Mobile Number
            </label>
            <input
              type="number"
              name="altMobile"
              id="mobile"
              placeholder="+91"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
            />
          </div>
        </div>
        <p>
          <span style={{ color: "red" }}>*</span> Basic Details
        </p>
        <Hr />
        {/* Details of Last Eligible Qualifying Board/Council/College/University Examination for Scholarship */}
        {/* first row  */}
        <div className="row">
          <div className="input-group">
            <label htmlFor="Name of qualifying public exam">
              Name of qualifying public examination
            </label>
            <input
              type="text"
              name="Name of qualifying public examination"
              id="Name of qualifying public examination"
              placeholder="Name of qualifying public examination"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of the Board/Council/College/University">
              Name of the Board/Council/College/University
            </label>
            <input
              type="text"
              name="Name of the Board/Council/College/University"
              id="Name of the Board/Council/College/University"
              placeholder="Name of the Board/Council/College/University"
            />
          </div>
        </div>
        {/* second row  */}
        <div className="input-group2">
          <label
            htmlFor="Roll Number of last eligible Board/Council/College/University
            examination for Scholarship"
          >
            Roll Number of last eligible Board/Council/College/University
            examination for Scholarship
          </label>
          <input
            type="text"
            name="Roll Number of last eligible Board/Council/College/University examination for Scholarship"
            id="Roll Number of last eligible Board/Council/College/University examination for Scholarship"
            placeholder="Roll Number"
          />
        </div>
        {/* third row  */}
        <div className="input-group2">
          <label
            htmlFor=" Passing Year Of Standard Board/Council/College/University
            Examination"
          >
            Passing Year Of Standard Board/Council/College/University
            Examination
          </label>
          <input
            type="year"
            name="Passing Year Of Standard Board/Council/College/University Examination"
            id="Passing Year Of Standard Board/Council/College/University Examination"
            placeholder="2022"
          />
        </div>
        {/* fourth row  */}
        <div className="row">
          <div className="input-group">
            <label htmlFor="Total marks obtained">Total marks obtained</label>
            <input
              type="text"
              name="Total marks obtained"
              id="Total marks obtained"
              placeholder="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Out of">Out of</label>
            <input type="text" name="Out of" id="Out of" placeholder="100" />
          </div>
          <div className="input-group">
            <label htmlFor="Overall percentage(%)">Overall percentage(%)</label>
            <input
              type="text"
              name="Overall percentage(%)"
              id="Overall percentage(%)"
              placeholder="100%"
            />
          </div>
        </div>
        <p>
          <span style={{ color: "red" }}>*</span> Details of Last Eligible
          Qualifying Board/Council/College/University Examination for
          Scholarship
        </p>
        <Hr />

        {/* Present Course of Study */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Select District">Select District</label>
            <input
              type="text"
              name="District"
              id="District"
              placeholder="District"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Select State">Select State</label>
            <input type="text" name="State" id="State" placeholder="State" />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Name Of Institution">Name Of Institution</label>
            <input
              type="text"
              name="Name Of Institution"
              id="Name Of Institution"
              placeholder="Institution Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of Present Course">
              Name of Present Course
            </label>
            <input
              type="text"
              name="Name of Present Course"
              id="Name of Present Course"
              placeholder="Present Course"
            />
          </div>
        </div>

        {/* third row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Discipline of Course">Discipline of Course</label>
            <input
              type="text"
              name="Discipline of Course"
              id="Discipline of Course"
              placeholder="Discipline"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Date Of Admission">Date Of Admission</label>
            <input
              type="date"
              name="Date Of Admission"
              id="Date Of Admission"
              placeholder="Present Course"
            />
          </div>
        </div>

        {/* fourth row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Duration of Course(In years)">
              Duration of Course(In years)
            </label>
            <input
              type="text"
              name="Duration of Course(In years)"
              id="Duration of Course(In years)"
              placeholder="3/4/5"
            />
          </div>
          <div className="input-group">
            <label
              htmlFor=" Total income of family(in rupees,from all sources for the period
              from JAN,2024)"
            >
              Total income of family(in rupees,from all sources for the period
              from JAN,2024)
            </label>
            <input
              type="text"
              name="Total income of family"
              id="Total income of family"
              placeholder="100000"
            />
          </div>
        </div>
        <p>
          <span style={{ color: "red" }}>*</span> Present Course of Study
        </p>
        <Hr />

        {/* Personal Details  */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Father'sName">Father’s Name</label>
            <input
              type="text"
              name="Father'sName"
              id="Father'sName"
              placeholder="John Doe"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Mother’s name">Mother’s name</label>
            <input
              type="text"
              name="Mother’s name"
              id="Mother’s name"
              placeholder="Jane Doe"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Guardian’s Name">Guardian’s Name</label>
            <input
              type="text"
              name="Guardian’s Name"
              id="Guardian’s Name"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Occupation of Guardian">
              Occupation of Guardian
            </label>
            <input
              type="text"
              name="Occupation of Guardian"
              id="Occupation of Guardian"
              placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Relation with Guardian">
              Relation with Guardian
            </label>
            <input
              type="text"
              name="Relation with Guardian"
              id="Relation with Guardian"
              placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Caste">Caste</label>
            <input type="text" name="Caste" id="Caste" placeholder="Caste" />
          </div>
        </div>

        {/* third row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Weather differently Able">
              Weather differently Able
            </label>
            <input
              type="text"
              name="Weather differently Able"
              id="Weather differently Able)"
              placeholder="Yes/No"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Any Linguistic/Religious minority Community">
              Any Linguistic/Religious minority Community
            </label>
            <input
              type="text"
              name="Any Linguistic/Religious minority Communityy"
              id="Any Linguistic/Religious minority Community"
              placeholder="Yes/No"
            />
          </div>
        </div>

        <p>
          <span style={{ color: "red" }}>*</span> Personal Details
        </p>
        <Hr />

        {/* Permanent Address */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="House No">House No</label>
            <input
              type="text"
              name="House No"
              id="House No"
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Street name">Street name</label>
            <input
              type="text"
              name="Street name"
              id="Street name"
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Town/Village">Town/Village</label>
            <input
              type="text"
              name="CasteTown/Village"
              id="Town/Village"
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="Post Office">Post Office</label>
            <input
              type="text"
              name="Post Office"
              id="Post Office"
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="PIN Code">PIN Code</label>
            <input
              type="text"
              name="PIN Code"
              id="PIN Code"
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="District">District</label>
            <input
              type="text"
              name="District"
              id="District"
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* third row */}
        <div className="input-group2">
          <label htmlFor="District">State</label>
          <input
            type="text"
            name="State"
            id="State"
            // placeholder="Caste"
          />
        </div>
        <p>
          <span style={{ color: "red" }}>*</span> Permanent Address
        </p>
        <Hr />

        {/* Bank Details */}

        {/* first row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="IFSC Code">IFSC Code</label>
            <input
              type="text"
              name="IFSC Code"
              id="IFSC Code"
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Name of Bank">Name of Bank</label>
            <input
              type="text"
              name="Name of Bank"
              id="Name of Bank"
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Branch Name">Branch Name</label>
            <input
              type="text"
              name="Branch Name"
              id="Branch Name"
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="input-group">
            <label htmlFor="A/C No.">A/C No.</label>
            <input
              type="text"
              name="A/C No."
              id="A/C No."
              // placeholder="Occupation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Branch Code">Branch Code</label>
            <input
              type="text"
              name="Branch Code"
              id="Branch Code"
              // placeholder="Relation"
            />
          </div>
          <div className="input-group">
            <label htmlFor="MIRC Code">MIRC Code</label>
            <input
              type="text"
              name="MIRC Code"
              id="MIRC Code"
              // placeholder="Caste"
            />
          </div>
        </div>

        {/* third row  */}

        <div className="input-group2">
          <label htmlFor="Upload Bank Passbook (First page) ">
            Upload Bank Passbook (First page){" "}
          </label>
          <input
            type="file"
            name="Upload Bank Passbook (First page) "
            id="Upload Bank Passbook (First page) "
            placeholder="Upload Bank Passbook (First page) "
          />
          <p>
            <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
          </p>
        </div>
        <p>
          <span style={{ color: "red" }}>*</span> Bank Details
        </p>
        <Hr />

        {/* upload section*/}

        {/* first row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Photo</label>
            <input
              type="file"
              name="Upload Photo"
              id="Upload Photo"
              placeholder="Upload Photo"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Signature</label>
            <input
              type="file"
              name="Upload Signature"
              id="Upload Signature"
              // placeholder="Upload Signature"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* second row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Aadhaar Card">Upload Aadhaar Card</label>
            <input
              type="file"
              name="Upload Aadhaar Card"
              id="Upload Aadhaar Card"
              placeholder="Upload Aadhaar Cardo"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Photo">Upload Domicile certificate</label>
            <input
              type="file"
              name="Upload Domicile certificate"
              id="Upload Domicile certificate"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* third row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Mark sheet (Last qualifying exam)">
              Upload Mark sheet (Last qualifying exam)
            </label>
            <input
              type="file"
              name="Upload Mark sheet (Last qualifying exam)"
              id="Upload Mark sheet (Last qualifying exam)"
              // placeholder="Upload Mark sheet (Last qualifying exam)"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
          <div className="input-group2">
            <label htmlFor="Upload Payment Receipt">
              Upload Payment Receipt
            </label>
            <input
              type="file"
              name="Upload Payment Receipt"
              id="Upload Payment Receipt"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>

        {/* fourth row  */}

        <div className="row">
          <div className="input-group2">
            <label htmlFor="Upload Income Certificate ">
              Upload Income Certificate
            </label>
            <input
              type="file"
              name="Upload Income Certificate "
              id="Upload Income Certificate "
              // placeholder="Upload Mark sheet (Last qualifying exam)"
            />
            <p>
              <span style={{ color: "red" }}>*</span> Size Less Than 60 kb
            </p>
          </div>
        </div>
        {/* <Submitbutton />
         */}
        <button
          type="submit"
          className="btn btn-primary"
          // justify-content="center"
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            left: "50%",
            height: "40px",
            marginLeft: "45%",
          }}
        >
          Submit
        </button>

        {/* <button
          type="submit"
          className="btn btn-primary"
          justify-content="center"
        ></button> */}
      </form>
    </div>
  );
};

export default Application;
