import { MdKeyboardArrowDown } from "react-icons/md"
import  "./Filter.css"
import { AiOutlineFileText } from "react-icons/ai"


export default function Filter() {
  return (
    <div className="filter">
      <h1 className="mainHeader">London Internship Program</h1>
      <h4>London</h4>
      <input type="text" placeholder="Serach by name, edu, exp or #tag" />
      <div className="filters">
        <p> <h3>Filters</h3> <span>0 selected</span> </p>
        <ul>
          <li> <span> <AiOutlineFileText size={20} />  Personal Information</span>    <MdKeyboardArrowDown /></li>
          <li> <span> <AiOutlineFileText size={20} />  Education</span>    <MdKeyboardArrowDown /></li>
          <li> <span> <AiOutlineFileText size={20} />  Work Experience</span>    <MdKeyboardArrowDown /></li>
          <li> <span> <AiOutlineFileText size={20} />  Activity Filter</span>    <MdKeyboardArrowDown /></li>
          <li> <span> <AiOutlineFileText size={20} />  Advanced Filter</span>    </li>
        </ul>
      </div>
    </div>
  )
}
