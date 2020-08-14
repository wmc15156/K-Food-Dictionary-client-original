import React from "react";
import { Link } from "react-router-dom";


class GrainList extends React.Component {
    render() {
        return (
            <div>
                <Link to="/contents">곡물 페이지입니다</Link>
            </div>
        )
    }
}

export default GrainList;

