import styled from "styled-components";

type Props = {
    isChecked: boolean
}

export const ListItemBox = styled.div(({isChecked}: Props)=>(
    `
    background-color: #555960;
    box-shadow: 0px 0px 5px black;
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    aling-items: center;

    label {
        font-size: 20px;
        text-decoration: ${isChecked ? 'line-through' : 'initial'}
    }

    input {
        height: 20px;
        width: 20px;
    }

`
))