import Modal from "antd/lib/modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
    .ant-modal-content{
        background-color: #fff !important;
        
        color: ${props => props.theme.color};
        border-radius: ${props => props.modalBorderRadius || ""};
     }
     .ant-modal-header{
          background-image: linear-gradient(-90deg, #001529, #1890ff);
          color: ${props => props.theme.color};
     }
     .ant-modal-body{
          background-color :"	#F5F5F5"
          /* background-color: ${props =>
          props.theme.backgroundColor} !important; */
          color: ${props => props.theme.color};
         // padding: ${props => props.bodyPadding};
         padding: "18px";
         font-size: 13px;
         
         border-radius: ${props => props.modalBorderRadius || ""};
   }
    .ant-modal-footer{
        background-color: ${props => props.theme.backgroundColor} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-title{
        color: ${props => "#fff"};
        font-size: 1.3rem;
   }
   .ant-modal-close-x{
        color: ${props => "#fff"};
   }
  
`;
export default StyledModal;
