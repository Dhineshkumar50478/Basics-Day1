import { useState } from 'react'

function App() {

  return (
    <>
       <h1 className='title'>Basics</h1>
      <h1>H1 tag</h1>
      <h2>H2 tag</h2>
      <h3>H3 tag</h3>
      <h4>H4 tag</h4>
      <h5>H5 tag</h5>
      <h6>H6 tag</h6>
      <p>P tag<span> <bold>Span and Bold tag</bold></span></p>
      <a href="#"><span>Anker Tag</span>https://www.google.com</a>
      <div>
        <div>block1</div>
        <div>block2</div>
        <div>block3</div>
        <div>block3</div>
      </div>
      <h2 className='title'>Form</h2>
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
      <h2 className='title'>Table</h2>
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
      <h2 className='title'>Unordered List</h2>
      <ul>
        <li>Dhinesh</li>
        <li>Vijay</li>
        <li>Rajendhra prasanth</li>
        <li>Krishnana</li>
        <li>Santhosh</li>
      </ul>
      <h2>Ordered List</h2>
      <ol className='title'>
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
