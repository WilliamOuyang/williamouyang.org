import ico_download from "@/assets/ico_download.svg"
import PDF from './The System.pdf'

function download(){
  window.open(PDF, "_blank")
}

const Download = () => {
  return (
    <div style={{display:'flex', width:'100%', justifyContent:'center', marginTop:'50px', marginBottom:'50px'}}>
        <button style={{display:'flex', alignItems:'center'}} onClick={download}><img src={ico_download} className="mr-2"></img><strong><h1 style={{fontSize:'20px'}}> English (Original)</h1></strong></button>
    </div>
  )
}

export default Download