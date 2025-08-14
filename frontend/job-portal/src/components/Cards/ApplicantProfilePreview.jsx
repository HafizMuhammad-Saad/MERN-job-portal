import { Download, X } from "lucide-react"
import { useState } from "react"
import { getInitials } from "../../utils/helper"
import moment from "moment"
import axiosInstance from "../../utils/axiosInstance"
import { API_PATHS } from "../../utils/apiPaths"
import toast from "react-hot-toast"

import StatusBadge from "../StatusBadge"
const statusOptions = ["Applied", "In Review", "Accepted", "Rejected"];
const ApplicantProfilePreview = ({
    selectedApplicant, setSelectedApplicant, handleDownloadResume, handleClose
}) => {

    const [currentStatus, setCurrentStatus] = useState(selectedApplicant.status);
    const [loading, setLoading] = useState(false);

    const onChangeStatus = (e) => {
        const newStatus = e.target.value;
        setCurrentStatus(newStatus);
        setLoading(true);

        try {
            const response = axiosInstance.put(API_PATHS.APPLICATIONS.UPDATE_STATUS(selectedApplicant._id), {
                status: newStatus
            })
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
            
        }
    }
    return (
        <div>

        </div>
    )
}

export default ApplicantProfilePreview
