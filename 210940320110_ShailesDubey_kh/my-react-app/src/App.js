
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [list, setlist] = useState(["Hello world"]);
  const [data, setdata] = useState([""]);

  function chattab() {
    const newlist = [...list, data];
    setlist(newlist);

    setdata("");
    console.log('hello');
  }

  function readchat(e) {
    setdata(e.target.value);
  }

  return (
    <div className='container-fluid'>
      <div className='header'>
        <div>
          <span className='chatalign'><span className='chatsize'><b>MyChatApp</b></span>   <span className='author'> by STUDENT_NAME/STUDENT_ID</span></span>
        </div>

        <div className='aligninput'>
          <input type="text" value={data} className='inputbox' placeholder='Lets Chat here..' onChange={readchat} />
          <input type="button" className='butn' value="Submit" onClick={chattab} />
        </div>
        <div className='output'>
          {
            list.map((item) => {
              <div> {item}</div>
            })
          }
        </div>



      </div>
    </div>
  )
}
export default App;
