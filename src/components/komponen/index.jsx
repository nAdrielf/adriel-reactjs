import React from "react";
import ClassComponent from "./ClassComponent.jsx";
import Function from "./Function"

export default class Komponen extends React.Component{
    render(){
        return(
            <div>
                <ClassComponent r="Semuanya" />
                <Function nama="Joko" />
            </div>
        )
    }
}
 