import { useState } from 'react'
import { Building2, Mail, Edit3 } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import toast from 'react-hot-toast'
import uploadImage from '../../utils/uploadImage'

import DashboardLayout from '../../components/Layout/DashboardLayout'

const EmployerProfilePage = () => {

  const {user, updateUser} = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    companyName: user?.companyName || "",
    companyDescription: user?.companyDescription || "",
    companyLogo: user?.companyLogo || "",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({...profileData});
  const [uploading, uploading] = useState({avatar: false, logo: false});
  const [saving, saving] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const handleImageChange = (e, type) = {};

  const handleSave = async () => {};

  const handleCancel = () => {
    setFormData({...profileData});
    setEditMode(false);
  };

  return (
    <DashboardLayout activeMenu={"company-profile"}>
      <div className="">
        <div className="">
          <div className="">
            {/* Header and Avatar */}
            <div className="">
              <h1 className="">
                Employer Profile
              </h1>
              <button className="" onClick={() => setEditMode(true)}>
                <Edit3 className='' />
                <span className="">Edit Profile</span>
              </button>
            </div>

            {/* Profile Content  */}
            <div className="">
              <div className="">
                {/* Personal Information  */}
                <div className="">
                  <h2 className="">Personal Information</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmployerProfilePage
