import React from "react";
import { Link } from "react-router-dom";

class MeatList extends React.Component {
    render() {
        return (
            <div>
                <Link to="/contents">육류 페이지입니다</Link>
            </div>
        )
    }
}

export default MeatList;

