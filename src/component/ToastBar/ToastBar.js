import React from 'react'

function ToastBar(props) {

    const notify = (errors,types) =>
    { 
      if(types==="error")
      {
        toast.error("Invalid "+errors,{    
          position: "top-center",
          // autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          pauseOnHover: true,
          // draggable: true,
          // progress: undefined,        
      })
  
      }
      if(types==="success")
      {
        toast.error("Invalid "+errors,{    
          position: "top-center",
          // autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          pauseOnHover: true,
          // draggable: true,
          // progress: undefined,        
      })
  
      }
      
  };

    return (
        <>
            
        </>
    )
}

export default ToastBar
