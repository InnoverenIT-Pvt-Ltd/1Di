import React, { useState,useEffect,lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";
import { Icon, Tooltip,Input, Button, message,InputNumber,
Popconfirm, Form,Typography,} from "antd";
import moment from "moment";
import { BundleLoader } from "../../Components/Placeholder";
import { MultiAvatar, Select } from "../../Components/UI/Elements";
import { StyledTable, StyledPopconfirm } from "../../Components/UI/Antd";
import { FlexContainer, MainWrapper } from "../../Components/UI/Layout";
import { withRouter } from "react-router-dom";
import Highlighter from "react-highlight-words";
import {getTaskByCandidateId,handleTaskDrawerModal,
  updateTaskStatus,handleNoteDrawerModal,handlTaskNameDrawerModal} from "./TaskAction";
import SearchIcon from '@mui/icons-material/Search';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TaskNameDrawerModal from "./TaskNameDrawerModal";
import styled from "styled-components";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NoteDrawerModal from "./NoteDrawerModal";
import TaskDrawerModal from "./TaskDrawerModal";
const { Option } = Select;
const ButtonGroup = Button.Group;

function TaskTable (props) {

    useEffect(()=> {
        props.getTaskByCandidateId(props.candidateId);
      },[props.candidateId])

        const [rowDataPass,setRowDataPass]=useState({});
        const [visible,setVisible]=useState(false)
        const [form] = Form.useForm();
        const [data, setData] = useState([]);
        const [editingKey, setEditingKey] = useState('');
        const [searchText, setSearchText] = useState("");
        const [searchedColumn, setSearchedColumn] = useState("");

  function handlePassRowData(data){
    setRowDataPass(data)
    setVisible(!visible)
}
const isEditing = (record) => record.taskId === editingKey;

useEffect(() => {
  setData(props.taskTab)
}, [props.taskTab])
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />;
  return (
    <td {...restProps}>
      {editing && inputType !== "picker" ? (
        
         
            <Form.Item
              name={dataIndex}
              style={{
                margin: 0,
              }}
              rules={[
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ]}
            >
              <Select>
                {["To Start", "In Progress","Completed"].map((item) => {
                  return <Option value={item}>{item} </Option>;
                })}
              </Select>
            </Form.Item>

      ):(
        children
      )}
  </td>
);
};
const edit = (record) => {
form.setFieldsValue({
  complitionStatus: "",
  ...record,
});
setEditingKey(record.taskId);
};

const cancel = () => {
setEditingKey('');
};

const save = async (key) => {
// alert("Hello")
try {
  // alert("Try")
  const row = await form.validateFields();
  const newData = [...data];
  const index = newData.findIndex((item) => key === item.taskId);
  if (index > -1) {
    // alert("if");
    const item = newData[index];
    //console.log(item)
    newData.splice(index, 1, { ...item, ...row });
    const a = newData[index];

    props.updateTaskStatus(
      {
        complitionStatus: a.complitionStatus,
      },
      props.candidateId,
      key,
      
      
    );
    setEditingKey('');

  } else {
    alert("else");
    // newData.push(row); 
    setData(newData);
    setEditingKey('');

  }
} catch (errInfo) {
  //console.log('Validate Failed:', errInfo);
}
};
      function getColumnSearchProps(dataIndex) {
        return {
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) => (
              <div style={{ padding: 8 }}>
                <Input
                  placeholder={`Search ${dataIndex}`}
                  value={selectedKeys[0]}
                  onChange={(e) =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                  }
                  onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                  style={{ width: 240, marginBottom: 8, display: "block" }}
                />
            
                  <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{ width: 90 }}
                  >
                    Search
                </Button>
                  <Button
                    onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                  >
                    Reset
                </Button>
                  <Button
                    type="link"
                    size="small"
                    onClick={() => {
                      confirm({ closeDropdown: false });
                      setSearchText(selectedKeys[0]);
                      setSearchedColumn(dataIndex);
                    }}
                  >
                    Filter
                </Button>
               
              </div>
            ),
          filterIcon: (filtered) => (
            <SearchIcon style={{ fontSize:"smaller", color: filtered ? '#1890ff' : undefined }} /> 
          ),
          onFilter: (value, record) =>
            record[dataIndex]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
            }
          },
          render: (text) =>
            searchedColumn === dataIndex ? (
              <Highlighter
                highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
              />
            ) : (
                text
              ),
        };
      }
    
      function handleSearch(selectedKeys, confirm, dataIndex) {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      }
    
      function handleReset(clearFilters) {
        clearFilters();
        setSearchText("");
      }


    const columns = [
        {  
          width: "5%",
          dataIndex: "priority",
          render: (name, item, i) => {
            //debugger;
            return (
              <div>
                {item.priority === "High" && (
                  <div
                    style={{
                      borderRadius: "50%",
                      height: "2.1875em",
                      width: "2.1875em",
                      backgroundColor: "red",
                    }}
                  > 
                  </div>
                )} 
                {item.priority === "Medium" && (
                  <div
                    style={{
                      borderRadius: "50%",
                      height: "2.1875em",
                      width: "2.1875em",
                      backgroundColor: "orange",
                    }}
                  >
                  </div>
                )}
                {item.priority === "Low" && (
                  <div
                    style={{
                      borderRadius: "50%",
                      height: "2.1875em",
                      width: "2.1875em",
                      backgroundColor: "teal",
                    }}
                  >  
                  </div>  
                )}
              </div>
            );
        },
      },
      {
        title: <FormattedMessage id="app.name" defaultMessage="Name" />,
      //dataIndex: "taskName",
     width:"13%",
     ...getColumnSearchProps('taskName'),
     render: (name, item, i) => {
      return (
          <>
              <span
              onClick={() => {
                props.handlTaskNameDrawerModal(true);
                handlePassRowData(item)
              }}
              style={{
                cursor: "pointer",
                color: "#042E8A",
              }}
            >
                       {item.taskName }
            </span>
          </>
      
      );
     
    }, 
    
     },
        {
           title: <FormattedMessage
          id="app.type"
          defaultMessage="Type"
        />,
        dataIndex: "taskType",
        width:"10%",
        render: (name, item, i) => {     
          const currentdate = moment().format("DD/MM/YYYY");
          const date = moment(item.creationDate).format("DD/MM/YYYY");
          console.log(date, currentdate, currentdate === date);
          return (
            <>
             <span>{` ${item.taskType}`}</span>
              &nbsp;&nbsp;
              {date === currentdate ? (
                <span
                  style={{
                    color: "tomato",
                    fontWeight: "bold",
                  }}
                >
                  New
                </span>
              ) : null}
            </>
          );
        },
        },
        {
          title: <FormattedMessage id="app.Owner" defaultMessage="Owner" />,
        dataIndex: "submittedBy",
        field: "submittedBy",
        width:"12%",
       // ...getColumnSearchProps('submittedBy'),
       render: (name,item) => {
        return (
          <>
              <span>
                <MultiAvatar
                  primaryTitle={item.submittedBy}
                  //imageId={data.ownerImageId}
                  //imageURL={data.imageURL}
                  imgWidth={"2.1em"}
                  imgHeight={"2.1em"}
                />
              </span>
          </>
        );
      },
        },
        {
          // title: "Assigned on",
          title: <FormattedMessage id="app.assignedon" defaultMessage="Assigned on" />,
          dataIndex: "assignedOn",
          width:"15%",
          render: (name, item, i) => {
            return <span>{` ${moment(item.assignedOn).format("ll")}`}</span>;
          },
        },
        // {
        //   // title: "Contact",
        //   title: <FormattedMessage id="app.talent" defaultMessage="Talent" />,
        //   dataIndex: "candidateName",
        //   width:"10%",
        //   ...getColumnSearchProps('candidateName'),     
        // },
        {
          // title: "Start",
          title: <FormattedMessage id="app.start" defaultMessage="Start" />,
          dataIndex: "startDate",
          width:"15%",
          defaultSortOrder: "descend",
          render: (name, item, i) => {
            return <span>{` ${moment(item.startDate).format("ll")}`}</span>;
          },
          sorter: (a, b) => {
            var startDateA = a.startDate;
            var startDateB = b.startDate;
            return moment.utc(startDateA).diff(moment.utc(startDateB));
          },
        },
        {
          // title: "End",
          title: <FormattedMessage id="app.end" defaultMessage="End" />,
          dataIndex: "endDate",
          width:"15%",
          render: (name, item, i) => {
            return <span>{` ${moment(item.endDate).format("ll")}`}</span>;
          },
          onFilter: (value, record) => record.endDate.indexOf(value) === 0,
          sorter: (a, b) => {
            var endDateA = a.endDate;
            var endDateB = b.endDate;
            return moment.utc(endDateA).diff(moment.utc(endDateB));
          },
        },
        {
          // title: "Status",
          title: <FormattedMessage id="app.status" defaultMessage="Status" />,
          dataIndex: "complitionStatus",
          width:"13%",
          editable: true, 
        },
        {
          // title: "Status",
          title: <FormattedMessage id="app.hour" defaultMessage="hour" />,
         // dataIndex: "complitionStatus",
          width:"6%",
          render:(name,item,i)=> {

            return (
              <AccessTimeIcon
           
              onClick={()=>{
                 props.handleTaskDrawerModal(true);
                handlePassRowData(item);
               
              }}
              style={{color:"green",fontSize:"0.8rem",cursor:"pointer"}}
              // style={{
              //   textDecoration:"underline",
              //   color:visible && item.taskName === rowDataPass.taskName ? "teal":"orange",
              //   cursor:"pointer"
              // }}
            
              // {item.taskName}
           
            />
            );
           }
        },
        {
         width:"13%",
          title:"Comments",
          render:(name,item,i)=> {

            return (
              <NoteAltIcon
              onClick={()=>{
                props.handleNoteDrawerModal(true);
               handlePassRowData(item);
               

              
             }}
             style={{color:"green",fontSize:"0.8rem",cursor:"pointer"}}
              
              />
            );
           }
          
        },
        {
          title: '',
          dataIndex: 'operation',
          width: "14%", 
          render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <Typography.Link
                  onClick={() =>
                    save(record.taskId)
                  }
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                  </Typography.Link>
                <Popconfirm title="Sure to cancel?"
                  onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) :
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
             <HourglassTopIcon style={{fontSize:"0.8rem"}}/>
              </Typography.Link>
          },
        },     
        
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
  
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex==="complitionStatus" ? "text" :"picker" , 
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    }); 
    return (
        <>
            <Form form={form} component={false}>
        <StyledTable
        rowKey="taskId"
        dataSource={data}
          // loading={props.fetchingTaskbyCandidateId || props.fetchingTaskbyCandidateIdError}
          scroll={{ y: 400 }}
          pagination={false}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        columns={mergedColumns}
        rowClassName="editable-row"

      />   
      </Form>

        <TaskNameDrawerModal
        rowDataPass={rowDataPass}
        clickTaskDrawerModal={props.clickTaskDrawerModal}
        handleTaskDrawerModal={props.handleTaskDrawerModal}
        />
        <NoteDrawerModal
        rowDataPass={rowDataPass}
        clickNoteDrawerModal={props.clickNoteDrawerModal}
        handleNoteDrawerModal={props.handleNoteDrawerModal}
        />
         <TaskDrawerModal
        rowDataPass={rowDataPass}
        clickTaskNameDrawerModal={props.clickTaskNameDrawerModal}
        handlTaskNameDrawerModal={props.handlTaskNameDrawerModal}
        />
        </>
      

    );
    
}
const mapStateToProps =({task,auth})=>({
  taskTab:task.taskTab,
  candidateId:auth.userDetails.candidateId,
clickTaskDrawerModal:task.clickTaskDrawerModal,
clickNoteDrawerModal:task.clickNoteDrawerModal,
clickTaskNameDrawerModal:task.clickTaskNameDrawerModal,
fetchingTaskbyCandidateId:task.fetchingTaskbyCandidateId,
fetchingTaskbyCandidateIdError:task.fetchingTaskbyCandidateIdError
});
const mapDispatchToProps =(dispatch)=>
    bindActionCreators({
      getTaskByCandidateId,
      handleTaskDrawerModal,
      updateTaskStatus,
      handleNoteDrawerModal,
      handlTaskNameDrawerModal
    },dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskTable));

function StatusIcon({ type, iconType, tooltip, status, size, onClick, role }) {
  const start = type;
  console.log(start);
  //////debugger;
  if (status === type) {
    size = "1.875em";
  } else {
    size = "1em";
  }
  return (
    <Tooltip title={tooltip}>
      <Button
        ghost={status !== type}
        style={{
          padding: "0.375em",
          borderColor: "transparent",
          color: status === type ? "orange" : "grey",
        }}
        onClick={onClick}
      >
        {/* <i className={`fas ${iconType}`} style={{ fontSize: "1.375em" }}></i> */}
       <HourglassTopIcon/>
             </Button>
    </Tooltip>
  );
}
function overdue(pendingDays) {
  //debugger;
  if (pendingDays === -1) {
    //debugger;
    return <span style={{ color: "red", fontStyle: "italic" }}>1 Day</span>;
  }
  if (pendingDays < 0) {
    //debugger;
    return (
      <span style={{ color: "red", fontStyle: "italic" }}>{`${Math.abs(
        pendingDays
      )} Days`}</span>
    );
  }
  if (pendingDays === 1) {
    //debugger;
    return (
      <span
        style={{ color: "#21ce21", fontStyle: "italic" }}
      >{`${pendingDays} Day`}</span>
    );
  }
  if (pendingDays > 0) {
    //debugger;
    return (
      <span
        style={{ color: "#21ce21", fontStyle: "italic" }}
      >{`${pendingDays} Days`}</span>
    );
  }
}


