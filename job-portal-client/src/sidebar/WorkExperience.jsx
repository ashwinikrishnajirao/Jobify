import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>

    <div>
      <label className="sidebar-label-container">
        {/* <input
          type="radio"
          name="test2"
          id="test2"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any Experience */}
      </label>

      <InputField
        handleChange={handleChange}
        value="Fresher"
        title="Fresher"
        name="test2"
      />

      <InputField
        handleChange={handleChange}
        value="Internship"
        title="Internship"
        name="test2"
      />
      <InputField
        handleChange={handleChange}
        value="0-2 years"
        title="0-2 years"
        name="test2"
      />
      <InputField
        handleChange={handleChange}
        value="2-5 years"
        title="2-5 years"
        name="test2"
      />
      <InputField
        handleChange={handleChange}
        value="more than 5 years"
        title="More than 5 years"
        name="test2"
      />

      
      
    </div>
  </div>
  )
}

export default WorkExperience