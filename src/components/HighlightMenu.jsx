function HighlightMenu() {
  return (
    <div className="highlight-menu">
      <nav>
        <ul className="hmenu-ul">
          <li className="hmenu-nav-link about">
            <div className="boxes-icon">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-school"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </div>
            <div>
              <a href="">O školi</a>
              <p className="">SSŠAH</p>
            </div>
          </li>
          <li className="hmenu-nav-link location">
            <div className="boxes-icon">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-map-marker-alt"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
            </div>
            <div>
              <a href="">Lokacija</a>
              <p className="hmenu-nav-link-desc">Savska cesta 77 10000 Zagreb</p>
            </div>
          </li>
          <li className="hmenu-nav-link bells">
            <div className="boxes-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </div>
            <div>
              <a href="">Raspored</a>
              <p>Raspored zvona</p>
            </div>
          </li>
          <li className="hmenu-nav-link news">
            <div>
              <a href="">Novosti</a>
              <p>Pratite naše novosti</p>
            </div>
            <div className="news-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HighlightMenu;
