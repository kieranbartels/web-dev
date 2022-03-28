import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list.js";
import ReduxExamples from "./redux-examples";

const Lab = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>

            <div>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
                <TodoList/>
            </div>

            <ReduxExamples/>
        </>
    )
};

export default Lab;
