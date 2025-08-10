import React from 'react'

const JobPostingForm = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Job Posting Form</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="companyName" className="block text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="jobDescription" className="block text-sm font-medium">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Post Job
        </button>
      </form>
    </div>
  )
}

export default JobPostingForm
