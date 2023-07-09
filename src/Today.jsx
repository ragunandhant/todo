import { useState } from "react";
import { ModalForm } from "./Modal";
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export const Today = (props) => {
    console.log(props.data);
    let todayDate = formatDate(props.date);
    const [usedata, setUsedata] = useState(props.data || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        description: '',
        date: ""
    });




    const todelete = (e, index) => {
        let updateData = [...usedata];
        updateData.splice(index, 1);
        setUsedata(updateData);
        // updateData = [...todo];
        // updateData.splice(index, 1);
        // todo = [...updateData];
    };

    const openModal = (data) => {
        setFormData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const todoChange = (e, index) => {
    //     const newData = [...usedata];
    //     newData[index].description = 'New description';
    //     setUsedata(newData);
    // };


    return (
        <div className="outerbox">
            <h1>{props.props}</h1>
            {usedata.map((e, index) => {
                return (
                    <div className="today_outer" key={e.id}>
                        <div className="today-box">
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                            {props.isupcomming && <p>{e.date}</p>}
                        </div>
                        <div>
                            <button onClick={() => todelete(e, index)}>Delete</button>
                            <button onClick={() => openModal(e)}>Edit</button>
                        </div>
                    </div>
                );
            })}
            {isModalOpen && (
                <ModalForm closeModal={closeModal} formData={formData} setFormData={setFormData} setUsedata={setUsedata} data={props.data} />
            )}
        </div>
    );
};