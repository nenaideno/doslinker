import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { actionCompleteSwitcher, addQuery, generateResult } from './../../../redux/shortReducer';
import Cmd from "./Cmd";

const CmdContainer = (props: any) => {
    useEffect(() => {
        props.addQuery('')
        props.actionCompleteSwitcher()
    }, [])
    return <Cmd actionCompleteSwitcher={props.actionCompleteSwitcher} actionComplete={props.actionComplete} generateResult={props.generateResult} addQuery={props.addQuery} resultURL={props.resultURL} query={props.query}/>
}

let mapStateToProps = (state: any) => {
    return {
        query: state.short.query,
        resultURL: state.short.resultURL,
        actionComplete: state.short.actionComplete,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addQuery: (query: string) => {
            dispatch(addQuery(query))
        },
        generateResult: (query: string) => {
            dispatch(generateResult(query))
        },
        actionCompleteSwitcher: () => {
            dispatch(actionCompleteSwitcher())
        }
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps))(CmdContainer)