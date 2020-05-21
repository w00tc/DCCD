import React from 'react';
import {Header} from "../../Header/Header";
import {connect} from "react-redux";

export const FindContainer = (props) => {
    return (
        <div>
            <Header/>
            {console.log(props)}
        </div>
    )
}

let mapStateToProps = (state) => {
    items: state.items
}

export default connect(mapStateToProps)(Find)