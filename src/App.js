import logo from './logo.svg';
import './App.css';
import img1 from './img/man.png'
import img2 from './img/eye.png'
import img3 from './img/dot.png'
import img4 from './img/doc.png'
import img5 from './img/calendar.png'
import img6 from './img/bell.png'

const App = () => {
  return (
    <div >
      <div className="navbar">
        <div className="nama">
          INI NAMANYA
        </div>
        <div>
          <img className="gambar" src={img1} alt="avatar" />
        </div>
        <div>
          <img className="gambar" src={img5} alt="avatar" />
        </div>
        <div>
          <img className="gambar" src={img6} alt="avatar" />
        </div>
        <form className="search">
          <input type="text" placeholder="Search.." name="search" />
        </form>
      </div>
      <hr className="garis" />
      <div className="topbar">
        <div className="views">
          <div className="inviews">
            <img className="icon" src={img2} alt=""></img>
            <span className="judul">Total Views</span><br />
          </div>
          <div className="outviews">
            1.000.000
          </div>

        </div>
        <div className="comments">
          <div className="inviews">
            <img className="icon" src={img3} alt=""></img>
            <span className="judul">Total comments</span>
          </div>
          <div className="outviews">
            54.000
          </div>
        </div>
        <div className="posts">
          <div className="inviews">
            <img className="icon" src={img4} alt=""></img>
            <span className="judul">Total posts</span>
          </div>
          <div className="outviews">
            32
          </div>
        </div>
      </div>
      <div className="isi">
        <div className="grafik">
          ini grafik
        </div>
        <div className="recent">
          <span className="judul">Recent</span>
          <span>View All</span>
        </div>
      </div>
      <div className="tabel">
        <table cellspacing="0" cellpadding="0" className="anime">
          <tr>
            <th className="name">Name</th>
            <th>Views</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Attack on titan final season</td>
            <td>537.000</td>
            <td>25.100</td>
            <td className="action">
              <div className="eye">

              </div>
              <div className="pen">

              </div>
              <div className="dustbin">

              </div>
            </td>
          </tr>
          <tr>
            <td>Naruto</td>
            <td>537.000</td>
            <td>25.100</td>
            <td>
              <div className="eye">

              </div>
            </td>
          </tr>
          <tr>
            <td>Nisekoi</td>
            <td>537.000</td>
            <td>25.100</td>
            <td>
              <div className="eye">

              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App
