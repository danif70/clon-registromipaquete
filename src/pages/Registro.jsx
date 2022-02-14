import React, {useState} from "react";
import { Fragment } from "react";

import Form from "../Components/Form";



const Registro = () => {
  const [completedForm, setCompletedForm] = useState(false);
  
  return (
    <Fragment>
      <body>
        
         
          <div>
           <Form completedForm={completedForm} setCompletedForm={setCompletedForm}/> 
          </div>
          
        
      </body>
    </Fragment >
  );
};
export default Registro;
