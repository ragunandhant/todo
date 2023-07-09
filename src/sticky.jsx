import { useState } from "react";
import { stickywall } from "./dummydata";


export const Stickywall = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })
    var num = -1
    const [stick, setStick] = useState(stickywall || [])
    const [isAdd, setAdd] = useState(false)
    const color = [
        {
            outer: "darkblue",
            inner: "lightblue",
        },
        {
            outer: "red",
            inner: "pink",
        },
        {
            outer: "green",
            inner: "lightgreen",
        },
        {
            outer: "purple",
            inner: "lavender",
        },
        {
            outer: "orange",
            inner: "peachpuff",
        },
        {
            outer: "yellow",
            inner: "lemonchiffon",
        }
    ];

    console.log("sticky notes")


    console.log(stick);

    function deleteIndex(ind) {
        const updateData = [...stick]
        updateData.splice(ind, 1)
        setStick(updateData)
    }


    //to handle changes
    const handleInputChange = (event) => {
        console.log(formData);
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    //to add to todo list
    const onsubmit = () => {

        const data = {
            title: formData.title,
            content: formData.content.split("/")

        }
        const update = stick
        update.push(data)
        setStick(update)
        console.log(data);
        setAdd(!isAdd)
    }
    return (
        <div >
            <h1>Sticky Notes</h1>
            <div className='sticky'>
                {
                    stick.map((e, index) => {
                        num = (num + 1) % color.length
                        return (<div className='sticky-box' style={{ border: `1px solid ${color[num].outer} `, backgroundColor: color[num].inner, borderRadius: "12px" }}>
                            <h3 className='sticky-title'>{e.title}</h3>
                            <div>
                                <ul>
                                    {
                                        e.content.map((ele) => {
                                            return (
                                                <li>{ele}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <button onClick={() => { deleteIndex(index) }} class="delete-button">&#10006;</button>
                        </div>)
                    })

                }
                <div className='addSticky'><button onClick={() => { setAdd(!isAdd) }}>ADD</button></div>
            </div>
            {isAdd &&
                <div>
                    <form className="sticky-form">
                        <label className="form-label" htmlFor="title">Title:</label>
                        <input className="form-input" type="text" name="title" id="title" onChange={handleInputChange} />

                        <label className="form-label" htmlFor="content">Content:</label>
                        <textarea className="form-textarea" id="content" name="content" onChange={handleInputChange}>separate each line by /</textarea>

                    </form>
                    <button className='submit' onClick={() => { onsubmit() }}>Submit</button>
                </div>
            }
        </div>)
};