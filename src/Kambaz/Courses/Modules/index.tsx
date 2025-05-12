export default function Modules() {
  return (
    <div>
     <button>Collapse All</button>
     <button>View Progress</button>
     <select>
  <option value="Publish All">Publish All</option>
  <option value="None">none</option>
 
</select>
 <button>+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer- Chapter 1- Introduction</li>
                <li className="wd-content-item">Full Stack Developer- Chapter 1- Creating User Interface</li>
              </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to web development</li>
                <li className="wd-content-item">Creating HTTP Server with Node.js</li>
                <li className="wd-content-item">Creating a React Application </li>

              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
         Yet to be published
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
        Yet to be published
      </ul>
    </div>
);}
