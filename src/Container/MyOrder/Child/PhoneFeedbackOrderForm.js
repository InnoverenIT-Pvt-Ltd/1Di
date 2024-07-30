import React, { useEffect,useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { TextareaComponent } from '../../../Components/Forms/Formik/TextareaComponent';
import {Button} from "antd";
import {postFeedbackOrder}  from "../MyOrderAction";


function PhoneFeedbackOrderForm(props) {



  return (
    <>
   <div class="h-full overflow-hidden">
<div class=" max-sm:w-4/5 md:flex w-full m-auto  flex  justify-center items-center " >
<div class="flex flex-col max-sm:w-full md:w-2/4">
   <div class=" max-sm:w-full md: w-2/3 m-auto">

     <Formik
       enableReinitialize
       initialValues={{
       
        feedback:"",

       }}
      onSubmit={(values) => {
        props.postFeedbackOrder(
            {
              ...values,
             
            },
          );
        }}
     >
       {({ errors, touched, isSubmitting, values }) => (
         <Form className="form-background">

           
           <div class="flex justify-between">
             <div class="w-full items-start mt-2">
             <Field
                 name="feedback"
                 placeholder={"Write your feedback.."}
                 width={"100%"}
                 component={TextareaComponent}
               />
             </div>
            
           </div>
   
           <div class="mt-4">
           <Button
              type="primary"
             style={{ width: "100%", height: "2.8rem" }}
             htmlType='submit'
             loading={props.postingFeedback}
          >
            Submit
           </Button>
           </div>
          
         </Form>
       )}
     </Formik>

   

   </div>



 </div>
</div>

</div>
 </>

)
}

const mapStateToProps = ({ myorder }) => ({
    postingFeedback:myorder.postingFeedback
});
const mapDispatchToProps = (dispatch) =>
bindActionCreators(
  {
    postFeedbackOrder

  },
  dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(PhoneFeedbackOrderForm);