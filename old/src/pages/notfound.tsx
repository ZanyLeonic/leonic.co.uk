import MainCard from "@/components/main-card";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24 md:w-4/5 xl:w-2/5">
            <div className="home-wrapper" id="home-wrapper" data-content="home">
                <div className="card-image"></div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="card-header">
                            <span className="card-title"><i className="material-icons text-4xl">error_outline</i> Page not found</span>
                            <span className="card-subtitle">
                                Cannot find the specified page.
                            </span>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </MainCard>
    );
}

export default NotFoundPage;