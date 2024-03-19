import { useState } from 'react'

function App() {

  return (
    <>
       <h1>Basics</h1>
      <h1>Full stack</h1>
      <h2>Full stack</h2>
      <h3>Full stack</h3>
      <h4>Full stack</h4>
      <h5>Full stack</h5>
      <h6>Full stack</h6>
      <p>Full stack<span>Basics</span></p>
      <p>Dhinesh<bold>kumar</bold></p>
      <a href="#">https://www.google.com</a>
      <div>
        <div>block1</div>
        <div>block2</div>
        <div>block3</div>
        <div>block3</div>
      </div>
      <form action="#">
        <label htmlFor="name"></label><br />
        <input type="text" name='name' placeholder='Enter your name'/><br />
        <input type="password" placeholder='Enter your password'/><br />
        <input type="number" placeholder='Enter your age'/><br />
        <label htmlFor=""><input type="checkbox" name="checkbox" id="" />Male</label><br />
        <label htmlFor=""><input type="checkbox" />Female</label><br />
        <input type="color" name="" id="" placeholder='Choose your Favourite Color'/><br />
        <label htmlFor="">Choose your Date Of Birth:</label>
        <input type="date" name="" id=""/><br />
        <label htmlFor="">Enter Date and Time</label><br />
        <input type="datetime" name="" id="" /><br />
        <label htmlFor="">Email</label><br />
        <input type="email" name="" id="" placeholder='Enter your Email'/><br />
        <label htmlFor="">Cooment</label><br />
        <input type="text-area" placeholder='Write Something'/><br />
      </form>
      <table border="2px">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dhinesh</td>
            <td>21</td>
            <td>Erode</td>
          </tr>
          <tr>
            <td>vijay</td>
            <td>19</td>
            <td>theni</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Dhinesh</li>
        <li>Vijay</li>
        <li>Rajendhra prasanth</li>
        <li>Krishnana</li>
        <li>Santhosh</li>
      </ul>
      <ol>
        <li>Lokesh</li>
        <li>Athish</li>
        <li>Vignesh</li>
        <li>Ramesh</li>
      </ol>
      <button>Submit</button>
    </>
  )
}

export default App
