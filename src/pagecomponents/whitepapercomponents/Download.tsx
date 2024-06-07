import ico_download from "@/assets/ico_download.svg"

const Download = () => {
  return (
    <div style={{display:'flex', width:'100%', justifyContent:'center', marginTop:'50px', marginBottom:'50px'}}>
        <button style={{display:'flex', alignItems:'center'}}><img src={ico_download} className="mr-2"></img> English (Original)</button>
    </div>
  )
}

export default Download