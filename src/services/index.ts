import dynamoDBClient from "../model";
import TodoServerice from "./todosService"

const todoService = new TodoServerice(dynamoDBClient());

export default todoService;