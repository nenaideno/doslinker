import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { actionCompleteSwitcher, addQuery, generateResult } from "../../../../store/dosReducer";
import CmdItem from "./CmdItem";

const CmdItemContainer = (props) => {
    useEffect(() => {
        props.addQuery('')
        props.actionCompleteSwitcher()
    }, [])
    return <CmdItem actionCompleteSwitcher={props.actionCompleteSwitcher} actionComplete={props.actionComplete} generateResult={props.generateResult} addQuery={props.addQuery} resultURL={props.resultURL} query={props.query}/>
}

let mapStateToProps = (state) => {
    return {
        query: state.dos.query,
        resultURL: state.dos.resultURL,
        actionComplete: state.dos.actionComplete,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addQuery: (query) => {
            dispatch(addQuery(query))
        },
        generateResult: (query) => {
            dispatch(generateResult(query))
        },
        actionCompleteSwitcher: () => {
            dispatch(actionCompleteSwitcher())
        }
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps))(CmdItemContainer)