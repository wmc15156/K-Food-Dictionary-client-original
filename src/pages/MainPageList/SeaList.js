import React from "react";
import { Link } from "react-router-dom";

class SeaList extends React.Component {
    render() {
        return (
            <div>
                <Link to="/contents">해산물 페이지입니다</Link>
            </div>
        )
    }
}

export default SeaList;

