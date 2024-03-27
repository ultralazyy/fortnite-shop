function Footer() {
  return (
    <footer className="page-footer deep-purple-accent-3">
      <div className="footer-copyright">
        <div className="container">
           © {new Date().getFullYear()} Kirill Sharapov
          <a className="grey-text text-lighten-4 right" href="https://github.com/woofmgn">GitHub Repo</a>
        </div>
      </div>
    </footer>
  )
}


export {Footer};