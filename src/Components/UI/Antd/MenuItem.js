import Menu from "antd/lib/menu";
import styled from 'styled-components'

const StyledMenuItem = styled(Menu.Item)`
    .ant-menu{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
    .ant-menu>a:before {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
    
`
export default StyledMenuItem;