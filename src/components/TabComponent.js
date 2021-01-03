import React from "react";
import {baseUrl} from "../baseUrl";
function TabContent(props){
    if(props.imgname==='img1'){
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <img src={baseUrl+'img1.png'} alt ={props.imgname}/>
                        </div>
                    </div>
                </div>
            )
    }
    else if(props.imgname==='img2'){
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <img src={baseUrl+'img2.png'} alt ={props.imgname}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <img src={baseUrl+'img3.png'} alt ={props.imgname}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default TabContent;
