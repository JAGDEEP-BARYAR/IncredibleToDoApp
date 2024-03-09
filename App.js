import React from 'react';
import { useState } from 'react';
import { SafeAreaView} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}

export default App;
