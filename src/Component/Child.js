import {react,useState} from 'react';


export default function Child(props){

    const [isShow , setIsShow] = useState(false);
    var margine = props.space + "px";
    
    return(
        <div style={{marginLeft:margine, marginBottom:'15px',marginTop:'15px'}} >
        <div style={{
                background: "yellow",
                maxWidth: "200px",
                border: "2px solid gold",
                borderRadius: "15px",
                padding: "10px",
                cursor:'pointer'
            }}
            onClick={()=>setIsShow(!isShow)}
    > {props.name} <span>{props.child && props.child.length > 0 ?isShow ?"⬆️":"⬇️" :""}</span></div>
        
        {isShow && props.child && props.child.map((idx)=>(
            <>
                {/* <li>{idx.name}</li> */}
                {console.log(props.child.length)}
                <Child  name={idx.name} child={idx.children} space={props.space + 20}></Child>
            </>
        ))}
        </div>
    )
}