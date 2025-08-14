import {useState, useEffect, useMemo  } from 'react'
import { Users, Calender, MapPin, Briefcase, Download, Eye, ArrorLeft } from 'lucide-react';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import {getInitials} from '../../utils/helper';
import DashboardLayout from '../../components/Layout/DashboardLayout'

const ApplicationViewer = () => {

  const location = useLocation();
  const jobId = location.state?.jobId || null;

  const navigate = useNavigate();

  const {applications, setApplications} = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.APPLICATIONS.GET_ALL_APPLICATIONS(jobId));
      setApplications(response.data);
    } catch (error) {
      console.log("Error fetching applications:", error);
      
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (jobId) fetchApplications();
    else navigate('/manage-jobs');
  }, []);

  //Group applications by job
  const groupedApplications = useMemo(() => {
    const filtered = []
    return []
  }, [applications]);

  const handleDownloadResume = () => {
    window.open(resumeUrl, "_blank");
  }
  return (
    <DashboardLayout activeMenu={'manage-jobs'}>ApplicationViewer</DashboardLayout>
  )
}

export default ApplicationViewer
