import { Component } from "react"

interface FooterProps {
    author: string,
    authorURL: string,
    photo: boolean
}
class Footer extends Component<FooterProps> {

    constructor(props: FooterProps) {
        super(props)
    }

    render() {
        return ( 
            <div className="footer-copyright">
                <div className="container">
                © {(new Date().getFullYear())} Leo Durrant
                    <span className="grey-text text-lighten-4 right">
                        {this.props.photo ? (<>Photo by: </>) : (<>Background Art by: </>)} 
                        <a href={this.props.authorURL}>
                            {this.props.author}
                        </a>
                    </span>
                </div>
            </div>
        ) 
    }
}

export default Footer