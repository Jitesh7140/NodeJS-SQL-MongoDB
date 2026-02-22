import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { addTodoItems , getAllTodoItems} from "../service/serviceItems";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]); 

  useEffect(() => {
     getAllTodoItems().then((todoItemsdata) => {
      setTodoItems(todoItemsdata);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`); 
    const serviceItems = await addTodoItems({name: itemName, dueDate: itemDueDate});
    const newTodoItems = [
      ...todoItems,
      serviceItems,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async(id) => {
      const deletId = await deleteTodoItem(id);
    const newTodoItems = todoItems.filter((item) => item._id !== deletId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;