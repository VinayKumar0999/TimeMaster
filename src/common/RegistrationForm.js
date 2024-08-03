import { useState,useEffect } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
const RegisterForm = () => {
  const history = useHistory()
  const [initialState, setInitialValues] = useState({
    noOfDays: "",
    noOfSubjects: "",
    subjectDetails: [{ subject: "", difficulty: "", noOfChapters: "" }],
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error.length > 0);
    const hasEmptyFields = initialState.subjectDetails.some(
      (detail) =>
        !detail.subject || !detail.difficulty || !detail.noOfChapters
    );
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [errors, initialState]);

 const handleNoOfDaysChange = (e) => {
    const value = e.target.value;
    setInitialValues({
      ...initialState,
      noOfDays: value,
    });
    validateField("noOfDays", value);
  };


  const handleNoOfSubjectsChange = (e) => {
    const noOfSubjects = e.target.value;
    const subjectDetails = Array.from({ length: noOfSubjects }, () => ({
      subject: "",
      difficulty: "",
      noOfChapters: "",
    }));
    setInitialValues({
      ...initialState,
      noOfSubjects,
      subjectDetails,
    });
    validateField("noOfSubjects", noOfSubjects);
  };

  const handleSubjectDetailChange = (index, field, value) => {
    const newSubjectDetails = [...initialState.subjectDetails];
    newSubjectDetails[index][field] = value;
    setInitialValues({
      ...initialState,
      subjectDetails: newSubjectDetails,
    });
    validateField(field, value, index);
  };

    const validateField = (field, value, index) => {
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (field === "noOfDays" && (value <= 0 || isNaN(value))) {
      error = "Number of days must be a positive number.";
    } else if (field === "noOfSubjects" && (value <= 0 || isNaN(value))) {
      error = "Number of subjects must be a positive number.";
    }

    if (index !== undefined) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        newErrors.subjectDetails = newErrors.subjectDetails || [];
        newErrors.subjectDetails[index] = {
          ...newErrors.subjectDetails[index],
          [field]: error,
        };
        return newErrors;
      });
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (isFormValid) {
      console.log("Form submitted successfully!", initialState);
      history?.push('/notification')
    } else {
      console.log("Form has errors, please fix them before submitting.");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="time-registration-form">
    <div className='common-input-field'> 
      <label>
        Number of Days:
        <input
        className="input-spacing-label"
          placeholder="No Of Days"
          type="number"
          value={initialState?.noOfDays}
          onChange={handleNoOfDaysChange}
        />
      </label></div>
      <div> <label>
        Number of Subjects:
        <input
          placeholder="No Of Subjects"
          className="input-spacing-label"
          type="number"
          value={initialState?.noOfSubjects}
          onChange={handleNoOfSubjectsChange}
        />
      </label></div>
     
      {initialState?.noOfSubjects > 0 && (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Difficulty</th>
              <th>No of Chapters</th>
            </tr>
          </thead>
          <tbody>
            {initialState.subjectDetails.map((detail, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={detail.subject}
                    onChange={(e) =>
                      handleSubjectDetailChange(
                        index,
                        "subject",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <select
                    value={detail.difficulty}
                    onChange={(e) =>
                      handleSubjectDetailChange(
                        index,
                        "difficulty",
                        e.target.value
                      )
                    }
                  >
                    <option value="">Select</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={detail.noOfChapters}
                    onChange={(e) =>
                      handleSubjectDetailChange(
                        index,
                        "noOfChapters",
                        e.target.value
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
      </form>
    </>
  );
};

export default RegisterForm;
