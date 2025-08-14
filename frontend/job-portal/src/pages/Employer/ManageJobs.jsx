import { useState, useMemo, useEffect } from 'react'
import { Search, Plus, Edit, X, Trash2, ChevronUp, ChevronDown, Users } from 'lucide-react';
import axiosInstance from '../../utils/axiosInstance';
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { API_PATHS } from '../../utils/apiPaths';
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const ManageJobs = () => {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;


  //Sample Job data
  const [jobs, setJobs] = useState([]);

  //filter and sort job
  const filteredAndSortedJobs = useMemo(() => {
    let filtered = [];

    return filtered;
  }, [jobs, searchTerm, statusFilter, sortField, sortDirection]);

  //Pagination
  const totalPages = Math.ceil(filteredAndSortedJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredAndSortedJobs.slice(startIndex, startIndex + itemsPerPage);

  const handle
  return (
    <DashboardLayout>
      ManageJobs
    </DashboardLayout>
  )
}

export default ManageJobs
