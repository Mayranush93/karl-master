import {useNavigate, useParams, useLocation} from "react-router-dom";

const withRouter = (Comp) => (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams();

    return <Comp {...props}
    navigate={navigate}
    location={location}
    params={params}
    />
}

export default withRouter;


