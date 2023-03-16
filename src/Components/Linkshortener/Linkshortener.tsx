import Cmd from "./Cmd/Cmd"
import CmdContainer from "./Cmd/CmdContainer"
import './Linkshortener.scss'

const Linkshortener = (props: any) => {
    return <div className="container-fluid">
    <div className="container">
        <div className="row linkshorter">
            <div className="col-sm-9 cmd">
                <CmdContainer />
            </div>
            <div className="col-sm"></div>
        </div>
    </div>
</div>
}

export default Linkshortener