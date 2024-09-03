import styles from "./Application.module.css";
import Hr from "./Hr";
import Submitbutton from "./Submitbutton";
function Application() {
  return (
    <>
      <div>
        <h1>Application Form</h1>

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

        <div>
          <div className={styles.firstdiv}>
            <div className={styles.first}>
              <p>Gender</p>
              <input type="text" name="firstName" className={styles.inputbox} />
            </div>
            <div className={styles.first}>
              <p>Date of Birth</p>
              <input type="text" name="date" className={styles.inputbox} />
            </div>
            <div className={styles.first}>
              <p>Student ID</p>
              <input type="text" name="firstName" className={styles.inputbox} />
            </div>
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
            <p>AAdhaar ID</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>

        {/* Fourth Row */}

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
      </form>

      {/* Fifth Row */}

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Permanent Home Address</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
          <div className={styles.second}>
            <p>District/Region</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>
      <Hr />
      <form action="styles.altercontainer">
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
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Year of qualifying examination</p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>
              Roll Number of last eligible Board/Council/College/University
              examination for Scholarship
            </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>
              Passing Year Of Standard Board/Council/College/University
              Examination
            </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>
      <form action="" className={styles.maincontainer}>
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
      </form>
      <p id="important">
        * Details of Last Eligible Qualifying Board/Council/College/University
        Examination for Scholarship
      </p>
      <Hr />

      {/* personal details */}

      <form action="" className={styles.maincontainer}>
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
      </form>

      <form action="" className={styles.maincontainer}>
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
      </form>
      <form action="styles.altercontainer">
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
      </form>
      <Hr />
      {/* Permanent Address */}

      <form action="" className={styles.maincontainer}>
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
      </form>
      <form action="" className={styles.maincontainer}>
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
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>State </p>
            <input type="text" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>
      <p>*Permanent Address </p>
      <Hr />

      {/* Bank Account Details */}
      <form action="" className={styles.maincontainer}>
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
      </form>
      <form action="" className={styles.maincontainer}>
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
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Bank Passbook (First page) </p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>
      <p>*Bank Details </p>
      <Hr />

      {/* Upload Section */}

      <form action="styles.altercontainer">
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
      </form>

      <form action="styles.altercontainer">
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
      </form>

      <form action="styles.altercontainer">
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
      </form>

      <form action="styles.altercontainer">
        <div className={styles.seconddiv}>
          <div className={styles.second}>
            <p>Upload Income Certificate </p>
            <input type="file" name="firstName" className={styles.inputbox} />
          </div>
        </div>
      </form>
      <div className={styles.Submitbutton}>
        <Submitbutton />
      </div>
    </>
  );
}
export default Application;
