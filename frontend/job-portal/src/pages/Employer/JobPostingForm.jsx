import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { useState, useEffect } from 'react'
import {
  AlertCircle,
  MapPin,
  DollarSign,
  Briefcase,
  Users,
  Eye,
  Send,
} from 'lucide-react'
import { API_PATHS } from '../../utils/apiPaths'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { CATEGORIES, JOB_TYPES } from '../../utils/data'
import toast from 'react-hot-toast'
import InputField from '../../components/Input/InputField'
import SelectField from '../../components/Input/SelectField'
import TextareaField from '../../components/Input/TextareaField'

const JobPostingForm = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const jobId = location.state?.jobId || null;
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    category: '',
    salaryMin: '',
    salaryMax: '',
    description: '',
    requirements: '',
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isPreview, setIsPreview] = useState(false);

const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));

};

const handleSubmit = async (e) => {
  e.preventDefault();
};

// form validation helper
const validateForm = (formData) => {
  const errors = {};

  return errors;
};

const isFormValid = () => {
  const validationErrors = validateForm(formData);
  return Object.keys(validationErrors).length === 0;
};


  return (
    <DashboardLayout activeMenu="post-job">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
    
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Post a New Job</h2>
        <p className="text-gray-500">Fill out the form below to create a job listing</p>
      </div>
      <button
        onClick={() => setIsPreview(true)}
        disabled={!isFormValid()}
        className={`flex items-center gap-2 px-4 py-2 mt-4 sm:mt-0 rounded-md text-sm font-medium transition-all ${
          isFormValid()
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        <Eye className="w-4 h-4" />
        <span>Preview</span>
      </button>
    </div>

    {/* Form Fields */}
    <div className="space-y-6">
      <InputField
        label="Job Title"
        id="jobTitle"
        placeholder="e.g. Senior Software Engineer"
        value={formData.jobTitle}
        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
        error={errors.jobTitle}
        required
        icon={Briefcase}
      />

      {/* Location & Remote  */}
      <div className="space-y-4">
        <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row sm:items-end sm:justify-between sm:space-x-4">
          <div className="flex-1">
            <InputField
              label="Location"
              id="location"
              placeholder="e.g. New York, USA"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              error={errors.location}
              icon={MapPin}
            />
          </div>
        </div>
      </div>

      {/* Category & Job Type  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <SelectField
        label="Category"
        id="category"
        value={formData.category}
        onChange={(e) => handleInputChange("category", e.target.value)}
        options={CATEGORIES} 
        placeholder="Select a category"
        error={errors.category}
        required
        icon={Users}/>

        <SelectField 
        label="Job Type"
        id="jobType"
        options={JOB_TYPES} 
        value={formData.jobType}
        onChange={(e) => handleInputChange("jobType", e.target.value)}
        placeholder="Select a job type"
        error={errors.jobType}
        required
        icon={Briefcase}/>
      </div>

      {/* Description  */}
      <TextareaField
        label="Job Description"
        id="description"
        value={formData.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        error={errors.description}
        placeholder="Enter job description"
        helperText="Describe the job role, responsibilities, and any specific requirements."
      />
        
        {/* Requirements  */}
      <TextareaField
        label="Job Requirements"
        id="requirements"
        value={formData.requirements}
        onChange={(e) => handleInputChange("requirements", e.target.value)}
        error={errors.requirements}
        placeholder="Enter job requirements"
        helperText="Describe the skills, experience, and any other requirements for the job."
        required
      />
    </div>
  </div>
</div>

    </DashboardLayout>
  )
}

export default JobPostingForm
