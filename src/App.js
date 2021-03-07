import logo from './logo.svg';
import './App.css';
import img1 from './img/man.png'
import img2 from './img/eye.png'
import img3 from './img/dot.png'
import img4 from './img/doc.png'
import img5 from './img/calendar.png'
import img6 from './img/bell.png'
import img7 from './img/search.png'

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
        <div className="search">
          <form >
            <img className="cari" src={img7} alt="avatar" />
            <input type="text" placeholder="Search.." name="search" />
          </form>
        </div>
      </div>
      <hr className="garis" />
      <div className="topbar">
        <div className="views">
          <img className="icon" src={img2} alt=""></img>
          <div className="outviews">
            <span className="judul">Total Views</span>
              1.000.000
            </div>
        </div>
        <div className="comments">
          <img className="icon" src={img3} alt=""></img>
          <div className="outviews">
            <span className="judul">Total comments</span>
            54.000
          </div>
        </div>
        <div className="posts">
          <img className="icon" src={img4} alt=""></img>
          <div className="outviews">
            <span className="judul">Total posts</span>
            32
          </div>
        </div>
      </div>
      <div className="isi">
        <div className="grafik">
          <div className="navgrafik">
            <span className="judul">Visitor</span>
            o o o
          </div>
        </div>
        <div className="recent">
          <div className="navrecent">
            <span className="judul">Recent</span>
            <span>View All</span>
          </div>
          <div className="konten">
            <img className="gambar" src={img1} alt="avatar" />
            <div className="rate">
              <span>Doraemon</span>
              this is star
            </div>
          </div>
          <div className="konten">
            <img className="gambar" src={img1} alt="avatar" />
            <div className="rate">
              <span>Doraemon</span>
              this is star
            </div>
          </div>
          <div className="konten">
            <img className="gambar" src={img1} alt="avatar" />
            <div className="rate">
              <span>Doraemon</span>
              this is star
            </div>
          </div>
        </div>
      </div>
      <div className="tabel">
        <span className="judul">TOP 10 ANIME</span>
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
