import { Radio } from 'antd';
import React, { useEffect, useState } from "react";
import PostJobForm from './PostJobForm';
import { FormattedMessage } from 'react-intl';


function Step1(props) {
  const {translateText}=props;
   
    return (
      
        <>
         <div class="flex justify-center mt-8">
              <div class="flex w-2/3 justify-center items-center max-sm:w-wk">
                    <PostJobForm >
                        <h3 class="max-sm: text-xl md:text-3xl">
                        <FormattedMessage
                      id="app.when"
                      defaultMessage="when"
                    />
                          
                    </h3>
<div class="max-sm: w-full">
                        <Radio.Group onChange={props.handleStep1} value={props.duration}>
                     
                         <div className="grid grid-cols-3 gap-4">
                        <div class="w-full p-1">
                       <div class="max-sm:w-wk flex flex-row-reverse items-stretch justify-around  p-1 rounded">
  <label class="inline-flex w-80 h-24 items-center border border-gray-300 p-2 rounded transition duration-150 ease-in-out focus:bg-gubd focus-within:bg-gubd">
    <div>
  <Radio  value={"Urgent"}  > 
                       <div class={`max-sm: flex flex-row-reverse w-wk  ${props.duration === "Urgent" ? "text-white":null}`}
                       >Urgent</div>
                        </Radio>
                        </div>
    
  </label>
</div>
</div>
<div class="w-full p-1">
<div class="max-sm:w-wk flex flex-row-reverse items-stretch justify-around  p-1 rounded">
  <label class="inline-flex w-80 h-24 items-center border border-gray-300 p-2 rounded transition duration-150 ease-in-out focus:bg-gubd focus-within:bg-gubd">
  <Radio value={"1 week"} 
                       >
                       <div class={`max-sm: flex flex-row-reverse w-wk ${props.duration === "1 week" ? "text-white":null}`}>1 week</div>
                       </Radio>
  </label>
</div>
</div>
<div class="w-full p-1">
<div class="max-sm:w-wk flex flex-row-reverse items-stretch justify-around  p-1 rounded">
  <label class="inline-flex w-80 h-24 items-center border border-gray-300 p-2 rounded transition duration-150 ease-in-out focus:bg-gubd focus-within:bg-gubd">
  <Radio value={"2 week"}>
                        <div class={`max-sm: flex flex-row-reverse w-wk ${props.duration === "2 week" ? "text-white":null}`}>2 week</div>
                        </Radio>
   
  </label>
</div>
</div>
<div class="w-full p-1">
<div class="max-sm:w-wk flex flex-row-reverse items-stretch justify-around  p-1 rounded">
  <label class="inline-flex w-80 h-24 items-center border border-gray-300 p-2 rounded transition duration-150 ease-in-out focus:bg-gubd focus-within:bg-gubd">
  <Radio value={"1 month"} >
                        <div class={`max-sm: flex flex-row-reverse w-wk ${props.duration === "1 month" ? "text-white":null}`}>1 month</div> 
                        </Radio>
  </label>
</div>
</div>
<div class="w-full p-1">
<div class="max-sm:w-wk flex flex-row-reverse items-stretch justify-around  p-1 rounded">
  <label class="inline-flex w-80 h-24 items-center border border-gray-300 p-2 rounded transition duration-150 ease-in-out focus:bg-gubd focus-within:bg-gubd">
  <Radio value={"2 month"}>
                        <div class={`max-sm: flex flex-row-reverse w-wk ${props.duration === "2 month" ? "text-white":null}`}>2 month</div> 
                        </Radio>
  </label>
</div>
</div>

                       
                        </div>
                        </Radio.Group>
                        </div>
                        </PostJobForm>                                              
                        </div>
                        </div>
        </>
    )
    
}

export default Step1