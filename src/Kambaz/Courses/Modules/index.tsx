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
                <li className="wd-content-item">Full Stack Developer- Chapter 2- Creating User Interface</li>
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
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the next module</li>
                <li className="wd-content-item">More on Web Development</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer- Chapter 3</li>
                <li className="wd-content-item">Full Stack Developer- Chapter 4</li>
              </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Web development contents</li>
                <li className="wd-content-item">Enhancing the Application</li>
                <li className="wd-content-item">Introduction to mongodb </li>

              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the next module</li>
                <li className="wd-content-item">Advanced concepts Web Development</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer- Chapter 5</li>
                <li className="wd-content-item">Full Stack Developer- Chapter 6</li>
              </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Mongodb contents</li>
                <li className="wd-content-item">Enhancing the Application</li>
                <li className="wd-content-item">Enhancing UI </li>

              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
