export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> <br></br> 
          Multiple modules | <b>Not Available until</b> May 13 at 12:00 
EST | <b>Due</b>   May 15 at 11:59 PM EST       </li>
        <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a> <br></br>   
          Multiple modules | <b>Not Available until</b> 
          May 15 at 12:00 EST | 
          <b>Due</b>   
          May 17 at 11:59 PM EST       
          </li>

        <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a> 
          <br></br>   
          Multiple modules | 
          <b>Not Available until</b> 
          May 17 at 12:00 EST |
          <b>Due</b>   May 19 at 11:59 PM EST       
          </li>
    
      </ul>
    </div>
);}
