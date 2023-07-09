

function formatDate(date) {
    console.log(typeof date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
export const ModalForm = ({ closeModal, formData, setFormData, setUsedata, data }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const editedData = {
            id: formData.id,
            title: formData.title,
            description: formData.description,
            date: formatDate(new Date(formData.date))

        };

        const updatedData = data.map((item) => {
            if (item.id === editedData.id) {
                return editedData;
            }
            return item;
        });

        setFormData({
            id: null,
            title: '',
            description: ''
        });
        closeModal();
        // Update the todo array with the updatedData
        data = updatedData;
        console.log(updatedData);
        setUsedata(updatedData)
    };

    return (
        <div className="modal">
            <span className="close" onClick={closeModal}>
                &times;
            </span>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <br />
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date"
                    onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

