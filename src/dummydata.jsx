import { getTask } from "./api";

export const getdata = async(props) => {
    console.log(props)
    const data = await getTask({ id: props })
    console.log(data);
}

const todoListData = [{
        id: 1,
        title: 'Complete task 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2023-07-10',
        completed: false,
    },
    {
        id: 2,
        title: 'Finish task 2',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        date: '2023-07-12',
        completed: false,
    },
    {
        id: 3,
        title: 'Submit task 3',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
        date: '2023-07-08',
        completed: true,
    },
];


export const stickywall = [{
        "title": "Buy Groceries",
        "content": [
            "Milk",
            "Eggs",
            "Bread",
            "Apples"
        ]
    },
    {
        "title": "Call John",
        "content": [
            "Discuss project deadline",
            "Confirm meeting time"
        ]
    },
    {
        "title": "Plan Vacation",
        "content": [
            "Research destinations",
            "Book flights",
            "Find accommodation options"
        ]
    },
    {
        "title": "To-Do List",
        "content": [
            "Finish report",
            "Pay bills",
            "Walk the dog",
            "Gym session at 6 PM"
        ]
    },
    {
        "title": "Birthday Party",
        "content": [
            "Send invitations"
        ]
    }
]

export default todoListData;