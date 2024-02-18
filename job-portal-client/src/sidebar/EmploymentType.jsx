import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Type of employment</h4>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test3"
          id="test3"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any Experience
      </label>

      <InputField
        handleChange={handleChange}
        value="Full-time"
        title="Full-time"
        name="test3"
      />
      <InputField
        handleChange={handleChange}
        value="Part-time"
        title="Part-time"
        name="test3"
      />
      <InputField
        handleChange={handleChange}
        value="Temporary"
        title="Temporary"
        name="test3"
      />
      
      <InputField
        handleChange={handleChange}
        value="Remote work"
        title="Remote work"
        name="test3"
      />
      
      
    </div>
  </div>
  )
}

export default EmploymentType