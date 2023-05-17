import './globals.css'
import './index.css'
export default function Home() {
  return (
    <div>
    <nav className="">
      <div className="flex justify-between  items-center p-5">
        <div className="grid gap-1 grid-cols-2">
          <div>
            <a href = '#'>
            <svg viewBox="0 0 100 80" width="25" height="25">
              <rect width="70" height="5"></rect>
              <rect y="30" width="70" height="5"></rect>
              <rect y="60" width="70" height="5"></rect>
            </svg>
</a>
          </div>
          <a href='http://localhost:3000/' >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" />
          </a>
        </div>
        <div className="left-logos">
          <div className="recherche">
            <a href="RECHERCHER"> RECHERCHER</a>
          </div>

          <a href="login"> SE CONNECTER</a>
          <a href="help"> AIDE</a>
          <a href="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
            </svg>
          </a>
        </div>
      </div>
    </nav>
    
    </div>
  );    
  
}
