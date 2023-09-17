import "@/sass/footer.scss";

const Footer = (props: { copyrightOwner: string, author: string, authorURL: string, photo: boolean }) => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © 2011 - {new Date().getFullYear()} {props.copyrightOwner}
          <span className="grey-text text-lighten-4 right">
            {props.photo ? <>Photo by: </> : <>Background Art by: </>}
            <a href={props.authorURL}>{props.author}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
