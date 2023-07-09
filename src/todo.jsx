import React, { useState } from 'react';
import './todo.css';
import todoListData, { getdata } from './dummydata';
import { stickywall } from './dummydata';
import { Today } from './Today';
var todo = todoListData;
import { Stickywall } from './sticky';
import { getTask } from './api';
import Cookies from 'js-cookie';

function formatDate(date) {
    console.log(typeof date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}




const Todo = () => {
    const [usedata, setdata] = useState(todoListData)
    const [state, setState] = useState(2);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: ""
    })

    const data = Cookies.get('name')

    console.log(data);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        // Perform submit logic or API request with formData
        todo.push(formData)
        settodaynum(todo.filter((e) => e.date == formatDate(new Date(Date.now()))).length)
        setupcommingTaskcount(todo.filter((e) => e.date != formatDate(new Date(Date.now()))).length)
        console.log(formData);
        setState(0)
    };
    const [todaynum, settodaynum] = useState(todo.filter((e) => e.date == formatDate(new Date(Date.now()))).length)
    const [upcommingTask, setupcommingTaskcount] = useState(todo.filter((e) => e.date != formatDate(new Date(Date.now()))).length)
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return (
        <div className='outer'>
            <div className='inner-left'>
                <h3>Menu</h3>

                <input type='text' placeholder='Search..' />
                <div className='task'>
                    <h3>Tasks</h3>
                    <div className='subtask'>
                        <button onClick={() => setState(1)}>Upcoming</button>
                        <span>{upcommingTask}</span>

                    </div>
                    <div className='subtask'>
                        <button onClick={() => setState(2)}>Sticky wall</button>
                    </div>
                    <div className='subtask'>
                        <button onClick={() => setState(3)}>Today </button>
                        <span>{todaynum}</span>

                    </div>
                    <div className='subtask'>
                        <button onClick={() => setState(4)}>ADD Task</button>


                    </div>
                </div>
            </div>
            <div className='inner-right'>
                {state === 1 && <Today data={todo.filter((ele) => {
                    if (ele.date != formatDate(new Date(Date.now()))) {
                        return ele
                    }
                    else {
                        null
                    }
                })} props="upcoming"
                    date={currentDate} isupcomming={true} />}
                {state === 2 && <Stickywall />}









                {state === 3 && <Today props="Today"
                    date={new Date(Date.now())} isupcomming={false}
                    data={todo.filter((ele) => {
                        if (ele.date == formatDate(new Date(Date.now()))) {
                            return ele
                        }
                        else {
                            null
                        }
                    })}
                />}
            </div>
            {
                state == 4 && (
                    <div>
                        <h2>TASK</h2>
                        <form class="form-container" >
                            <label for="title">Title:</label>
                            <input type="text" id="title" name="title" class="form-input" value={formData.title}
                                onChange={handleChange} />

                            <label for="desc">Description:</label>
                            <input type="text" id="description" name="description" class="form-input"
                                onChange={handleChange} />

                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" class="form-input" value={formData.date}
                                onChange={handleChange} />


                        </form>
                        <button className='submit' onClick={() => { handleSubmit() }} >Submit</button>
                    </div>
                )
            }
        </div>
    );
};




























export default Todo;
