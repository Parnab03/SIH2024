import styles from "./Application.module.css";
import Hr from "./Hr";
import Submitbutton from "./Submitbutton";
function Application() {
  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}} >Application Form</h1>

        {/* First Row */}
      </div>
      <form action="" className={styles.maincontainer}>
        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>First name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Middle name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Last Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* Second Row  */}
        <div className={styles.datediv}>
          <div className={styles.dateinputbox}>
            <p>Gender</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.dateinputbox}>
            <p>Date Of Birth</p>
            <input type="date" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.dateinputbox}>
            <p>Student ID</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* Third Row */}
        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Nationality</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Religion</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Adhaar ID</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* Fourth Row */}
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Permanent Home Address</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
          <div className={styles.second}>
            <p>District/Region</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
        </div>
        {/* Fifth Row */}
        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Mobile Number</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Alternative Mobile Number</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Email address</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        <Hr />
        {/* * Details of Last Eligible Qualifying
        Board/Council/College/University Examination for Scholarship */}
        {/* first row */}
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Name of qualifying public examination</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>Name of the Board/Council/College/University</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* second row */}
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Year of qualifying examination</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* third row */}
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>
              Roll Number of last eligible Board/Council/College/University
              examination for Scholarship
            </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* fourth row */}
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>
              Passing Year Of Standard Board/Council/College/University
              Examination
            </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        {/* fifth row */}
        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Total marks obtain</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Out of</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Percentage(%)</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
        <p id="important">
          * Details of Last Eligible Qualifying Board/Council/College/University
          Examination for Scholarship
        </p>
        <Hr />

        {/* * Present Course of Study */}

        {/* first row */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Select District</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
          <div className={styles.second}>
            <p>Select State</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
        </div>

        {/* second row */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Name Of Institution</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
          <div className={styles.second}>
            <p>Name of Present Course</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
        </div>

        {/* third row */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Discipline of Course</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
          <div className={styles.second}>
            <p>Date Of Admission</p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
        </div>

        {/* fourth row */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Duration of Course(In years) </p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
          <div className={styles.second}>
            <p>
              Total income of family(in rupees,from all sources for the period
              from JAN,2024)
            </p>
            <input
              type="text"
              name="firstName"
              className={styles.secondinputbox}
            />
          </div>
        </div>

        <p>* Present Course of Study</p>
        <Hr />

        {/* Personal Details  */}

        {/* first row */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Father's Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Mother's Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Guardian's Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* second row */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Occupation of Guardian</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Relation with Guardian</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Caste</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* third row */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Wheather differently Able</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>Any Linguistic/Religious minority Community</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        <p>* Personal Details</p>
        <Hr />

        {/* Permanent Address */}

        {/* First Row  */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>House no</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Street Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Town/Village</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Second Row  */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>Post Office</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>PIN Code</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>District</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Third Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>State </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        <p>*Permanent Address </p>
        <Hr />

        {/* Bank Details  */}

        {/* First Row  */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>IFSC Code</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Name of Bank</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Branch Name</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Second Row  */}

        <div className={styles.firstdiv}>
          <div className={styles.first}>
            <p>A/C no.</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>Branch Code</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.first}>
            <p>MIIRC Code</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Third Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Bank Passbook (First page) </p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        <p>*Bank Details </p>
        <Hr />

        {/* Upload Section  */}
        {/* First Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Photograph</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>Upload Signature</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Second Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Aadhaar Card</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>Upload Domicile certificate</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Third Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Mark sheet (Last qualifying exam)</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>Upload Payment Receipt</p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Fourth Row  */}

        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Income Certificate </p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Submit button  */}
        <Submitbutton />
      </form>
    </>
  );
}
export default Application;
