import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./HighLight";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";
import { ListGroup } from "react-bootstrap";



export default function Lab3() {

  // Example todos array
  const todos = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice TypeScript" },
    { id: 3, title: "Build a project" }
  ];

  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
       
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables />
          <IfElse/>
          <TernaryOperator/>
          <ConditionalOutputIfElse/>
          <ConditionalOutputInline/>
          <ArrowFunctions />
          <ImpliedReturn />
          <TemplateLiterals />
          <SimpleArrays />
          <ArrayIndexAndLength />
          <AddingAndRemovingToFromArrays />
          <ForLoops />
          <MapFunction />
          <FindFunction />
          <FindIndex />
          <FilterFunction />
          <JsonStringify />
          <House  />
          <TodoItem />
          <TodoList />
          <Spreading  />
          <Destructing />
          <FunctionDestructing /> 
          <DestructingImports />
          <Classes />
          <Styles />
          <Add a={3} b={4} />
          <h4>Square of 4</h4>
          <Square>4</Square>
          <hr />
          <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
          </Highlight>
          <AddPathParameters />
          <PathParameters />
             <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
