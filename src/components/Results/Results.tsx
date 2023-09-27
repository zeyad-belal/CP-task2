import { AiOutlineTag } from "react-icons/ai"
import "./Results.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { FiUserX } from "react-icons/fi"
import { BiUserCheck ,BiUserVoice } from "react-icons/bi"


export default function Results() {
  return (
    <div className="results">
      <header>
      <select name="" id="">
        <option value="Opportunity Browsing">Opportunity Browsing <span>0</span> </option>
        <option value="Applied">Applied <span>0</span> </option>
        <option value="Shortlisted">Shortlisted <span>0</span> </option>
        <option value="Technical Interview">Technical Interview <span>0</span> </option>
        <option value="Opportunity Browsing">Opportunity Browsing <span>0</span> </option>
        <option value="Technical Interview">Video Interview I <span>0</span> </option>
        <option value="Video Interview II">Video Interview II <span>0</span> </option>
        <option value="Video Interview III">Video Interview III <span>0</span> </option>
        <option value="Offer">Offer <span>0</span> </option>
        <option value="Withdrawn">Withdrawn <span>0</span> </option>
        <MdKeyboardArrowDown />
      </select>
      <ul>
        <li><AiOutlineTag size={22} /></li>
        <li><FiUserX size={22} /></li>
        <li><BiUserCheck size={22} /></li>
        <li><BiUserVoice size={22} /></li>
        <li><RiMessage2Line size={22} /></li>
        <li> <button>Move to video interview  <span> <MdKeyboardArrowDown /> </span> </button> </li>
      </ul>
      </header>
      <main>
        <head>
          <div> <input type="checkbox" /> <span> 247 Candidates </span> </div>
          <div> <span> Qualified </span> <span>Task 25</span>  <span>Disqualified 23</span> </div>
        </head>
        <div className="cards">
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
          <div className="card">
          <input type="checkbox" />
              <div className='PPPic'></div>
              <div>
                <h3>Aaliyah Sanderson</h3>
                <p className="location">Riyadh, Saudi Arabia</p>
                <p className="uni">Bachelor - Cambridge University (2023 - 2023)</p>
                <p className="hash">#top_candidate</p>
                <p className="tags"><span>New York</span>  <span>Marketing</span>  <span>London</span></p>
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}
