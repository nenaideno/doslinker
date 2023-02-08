import React, { useState } from "react";
import { useForm } from "react-hook-form";

import './Linkshorter.scss'

// COMPONENTS
import Cmd from "./Cmd/Cmd";

const Linkshorter = (props) => {



    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row linkshorter">
                    <div className="col-sm-9 cmd">
                        <Cmd />
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div>

    )
}

export default Linkshorter;