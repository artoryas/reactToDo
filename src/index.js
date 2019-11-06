import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';

export default class App extends Component{

    maxId = 4;
    state = {
        todoData: [
           this.createTodoItem('Drink coffee'),
           this.createTodoItem('Make Awesome App'),
           this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const newData = todoData.filter((value) => value.id !== id);
            return{
                todoData: newData
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) =>{
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propname) {
        const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];

            const newItem = { ...oldItem, [propname]: !oldItem[propname]};

            const newArray = [  ...arr.slice(0, idx),
                                newItem,
                                ...arr.slice(idx + 1) ];
            return{
                todoData: newArray
            }
    }

    toggleImportant = (id) => {
        this.setState( ({todoData}) => {
            return this.toggleProperty(todoData, id, 'important');
        })
    }
    toggleDone = (id) => {
        this.setState( ({todoData}) => {
            return this.toggleProperty(todoData, id, 'done');
        })
    }

    onSearchData = (term) => {
        this.setState({term});
    } 

    searchData = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(({label}) => label.toLowerCase().includes(term.toLowerCase()));
    }

    onChangeFilter = (filter) => {
        this.setState({filter});
    }
    filterData = (items, filter) => {
        switch(filter) {
            case 'all': return items;
            case 'active': return items.filter((item) => !item.done);
            case 'done': return items.filter((item) => item.done);
            default: return items;
        }
    }

    render(){
        const {todoData, term, filter} = this.state;
        const doneCount = todoData.filter((item) => item.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filterData(this.searchData(todoData,term), filter);
        return (
            <div className='container col-md-5 mt-5'>
                <Header doneCount={doneCount} todoCount={todoCount}/>
                <div className='d-flex justify-content-between mt-3'>
                    <SearchPanel onSearchData={this.onSearchData}/>
                    <ItemStatusFilter 
                        filter={filter}
                        onChangeFilter={this.onChangeFilter}/>
                </div>
                <ToDoList data = {visibleItems} 
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}/>
                <ItemAddForm addItem={this.addItem}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));