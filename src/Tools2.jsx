import './Tools2.css';

function Tools2(){
    return(
        <section id="tools2">
            <div id="webdev" class="skillsrow">
            <h3>Web Development and 3D Web Content:</h3>
                <ul>
                    <li>
                        <img src="/images/icons/Three,js-icon.svg"></img>
                        {/* <button>Three.js</button> */}
                    </li>
                    <li>
                        {/* <button>React 3 Fiber</button> */}
                    </li>
                    <li>
                        <img src="/images/icons/icons8-html-5-color/icons8-html-5-48.png"></img>
                        {/* <button>HTML</button> */}
                    </li>
                    <li>
                    <img id='icon-img'src='/images/icons/icons8-css3-windows-11-color/icons8-css3-48.png'></img>
                        {/* <button>CSS</button> */}
                    </li>
                    <li>
                    <img id='icon-img'src='/images/icons/icons8-javascript-color/icons8-javascript-48.png'></img>
                        {/* <button>Javascript</button> */}
                    </li> 
                    <li>
                    <img id='icon-img' src='/images/icons/icons8-react-a-javascript-library-for-building-user-interfaces-color/icons8-react-a-javascript-library-for-building-user-interfaces-24.png'></img>
                        {/* <button>React</button> */}
                    </li>
                </ul>
            </div>
            
            <h3>VR + AR / Realtime Rendering / 
            Interactive Content Creation:</h3>
            <ul>               
                <li>
                    <img></img>
                    <button>Unreal Engine</button>
                </li>
                <li>
                    <button>Unity</button>
                </li>                
            </ul>
            <h3>Rendering:</h3>
            <ul>
                <li>
                    <button>V-Ray</button>
                </li>
                <li>
                    <button>Lumion</button>
                </li>
                <li>
                    <button>Twinmotion</button>
                </li>                      
            </ul>
            <h3>Post-Production:</h3>
            <ul>
                <li>
                    <button>Adobe Photoshop</button>
                </li>
                <li>
                    <button>After Effects</button>
                </li>
                <li>
                    <button>Premiere</button>
                </li>                         
            </ul>
            <h3>3D Modelling Tools:</h3>
            <ul>          
                <li>
                    <button>3ds Max</button>
                </li>
                <li>
                    <button>Blender</button>
                </li>               
            </ul>
            <h3>CAD & Sketch Design:</h3>
            <ul>
                <li>
                    <button>SketchUp</button>
                </li>
                <li>
                    <button>AutoCAD</button>
                </li>
                <li>
                    <button>Revit</button>
                </li>                      
            </ul>
            <h3>Photogrammetry:</h3>
            <ul>
                <li>
                    <button>Agisoft Photoscan</button>
                </li>
                <li>
                    <button>Luma AI</button>
                </li>
                <li>
                    <button>RealityCapture</button>
                </li>               
            </ul>

        </section>
    )
}

export default Tools2
