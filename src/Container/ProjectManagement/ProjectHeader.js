import React from 'react'
import { Select, Button } from 'antd';
import { StyledLabel } from '../../Components/UI/Elements';

const Option = Select.Option;
const ProjectHeader = () => {
    return (
        <div className=' flex justify-between text-white p-4 m-3' style={{ boxShadow: "1px 1px 4px 3px #dbcfcf", width: "98vw" }}>
            <div className=' w-1/4'>

                <Select
                    showSearch
                    style={{ width: 250 }}
                    placeholder="By Project Id"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="jack">AB-001</Option>
                    <Option value="lucy">CD-002</Option>
                    <Option value="tom">EF-003</Option>
                </Select>
            </div>
            <div className=' w-1/4'>
                <Select
                    showSearch
                    style={{ width: 250 }}
                    placeholder="By Location"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="jack">Cuttack</Option>
                    <Option value="lucy">Bhubaneswar</Option>
                    <Option value="tom">Kendrapada</Option>
                </Select>
            </div>
            <div className=' w-1/4'>
                <Select
                    showSearch
                    style={{ width: 250 }}
                    placeholder="Project In charge"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">John</Option>
                    <Option value="tom">Alex</Option>
                </Select>
            </div>
            <div className=' w-1/6'>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </div>
        </div>
    )
}

export default ProjectHeader
