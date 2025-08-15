import { ChevronDown, ChevronUp } from "lucide-react"
import { CATEGORIES, JOB_TYPES } from "../utils/data"
import SalaryRangeSlider from ''

const Filtersection = ({ title, children, isExpanded, onToggle }) => {
  <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
    <button className="flex items-center justify-between w-full text-left font-semibold "
      onClick={onToggle}>
      {title}
      {isExpanded ? <ChevronUp className="" /> : <ChevronDown className="" />}
    </button>
    {isExpanded && children}
  </div>
};

const FilterContent = ({
  toggleSection,
  clearAllFilters,
  expendSections,
  filters,
  handleFilterChange,
}) => {
  return (
    <div>

    </div>
  )
}

export default FilterContent
