import { Component } from "react";
import './Styles/Maiin.css'
import SubContents from "./SubContents";
import Advertisement from "./Advertisement";
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="Main">
                <div>
                    <SubContents/>
                    <SubContents/>
                    <SubContents/>
                </div>
                <div>
                    <Advertisement/>
                </div>
            </div>
            </>
        );
    }
}

export default Main;