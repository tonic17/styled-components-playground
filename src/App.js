import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { fadeIn } from "./animations/header-animation";
import { getTheme } from "./themes";
import "./CSS/styles.css";
import {
    ScH1,
    MainHeader,
    ScGrid,
    ScGridCol,
    ScRbContainer,
    ScRbSubContainer,
    ScRbLabel,
    ScRbInput,
    ScRbSpan,
    ScTextFieldForm,
    ScTextFieldInput,
    ScTextFieldLabel,
    ScSubContainer,
    ScTextFieldSpan,
    GridLayout
} from "./elements";
import TextField2 from "./elements/TextField2";
import DropdownMenu from "./elements/DropdownMenu";
import DropdownMenu2 from "./elements/DropdownMenu2";

const ScApp = styled.div`
    background-color: ${props => props.theme.colors.buy.primary};
    animation: 1s ${fadeIn} linear;

    &:hover {
        background-color: green;
    }
`;
const ScAppH1 = styled(ScH1)`
    color: red;
    font-size: 60px;
`;

class App extends Component {
    render() {
        return (
            <div>
                {/* <ThemeProvider theme={getTheme()}>
                    <ScTextFieldForm>
                        <ScSubContainer>
                            <ScTextFieldInput type="text" required="required" />
                            <ScTextFieldSpan />
                            <ScTextFieldLabel>Password</ScTextFieldLabel>
                        </ScSubContainer>
                    </ScTextFieldForm>
                </ThemeProvider>
                <TextField2 error={""} />
                <DropdownMenu />
                <DropdownMenu2 /> */}
                <GridLayout />
            </div>
        );
    }
}

export default App;
