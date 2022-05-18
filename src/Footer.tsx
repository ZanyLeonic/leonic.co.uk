function Footer() {

    return ( 
        <div className="footer-copyright">
            <div className="container">
            © {(new Date().getFullYear())} Leo Durrant
            <span className="grey-text text-lighten-4 right">Background Art by: <a href="https://www.pixiv.net/en/artworks/72166951">六七質</a></span>
            </div>
        </div>
  ) 
}

export default Footer