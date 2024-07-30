import React, { Component } from 'react'
import Apple from "../../Assets/Images/apple.jpg";
import Guava from "../../Assets/Images/guava.jpg"
import Orange from "../../Assets/Images/orange.jpg";
import Banana from "../../Assets/Images/banana.jpg";
import "./Customer.scss";
import { FlexContainer } from "../../Components/UI/Layout";
import { Button, Menu, Dropdown, Radio, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class Customer extends Component {
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };


    render() {
        const { value } = this.state;

        const menu = (
            <Menu>
                <Menu.Item>

                    <Radio.Group onChange={this.onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>

                        </Space>
                    </Radio.Group>
                </Menu.Item>

            </Menu>
        );
        return (
            <>
                <div style={{ marginLeft: "100px" }}>
                    <FlexContainer justifyContent={"flex-end"}>
                        <h3> SORT BY</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Dropdown overlay={menu}>
                            <a onClick={e => e.preventDefault()} href="/" >
                                Relevance<DownOutlined /> 
                            </a>
                        </Dropdown>
                        <br />

                    </FlexContainer>
                    <h1>Fruit</h1>

                    <FlexContainer>
                        <img
                            src={Apple} alt=""
                            style={{ height: "12.5em", width: "12.5em", borderRadius: "1.25em" }}
                        />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <img
                            src={Guava} alt=""
                            style={{ height: "12.5em", width: "12.5em", borderRadius: "1.25em" }}
                        />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <img
                            src={Orange} alt=""
                            style={{ height: "12.5em", width: "12.5em", borderRadius: "1.25em" }}
                        />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <img
                            src={Banana} alt=""
                            style={{ height: "12.5em", width: "12.5em", borderRadius: "1.25em" }}
                        />
                    </FlexContainer>
                    <br />
                    <FlexContainer>
                        <div>
                        <h3>Apples</h3>
                        <h5>Size 200-250gm </h5>
                        <h5>$150</h5>
                            <br />
                            <Button>Add +</Button>
                        </div>
                        
                        
                       <FlexContainer style={{marginLeft:"9.6875em"}}>
                        <div style={{ width: "21.25em" }}>
                            <h3>Guavas</h3>
                            <h5>Size 200-250gm</h5> 
                            <h5>$150</h5>
                            {/* <button>Add</button> */}
                        </div>
                        </FlexContainer>
                        <FlexContainer style={{marginLeft:"-78.8125em"}}>
                        <div style={{ width: "21.25em" }}>
                            <h3>Orange</h3>
                            <h5>Size 200-250gm </h5>
                            <h5>$150</h5>
                            {/* <button>Add</button> */}
                        </div>
                        </FlexContainer>
                        <FlexContainer style={{marginLeft:"-80.375em"}}>
                        <div >
                        <h3>Bananas</h3>
                        <h5>Size 200-250gm </h5>
                        <h5>$150</h5>
                        <Button>Add +</Button>
                        </div>
                        </FlexContainer>
                    </FlexContainer>
                </div>
            </>
        )
    }
}
export default Customer