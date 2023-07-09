const loginData = {
    username: 'ragu',
    password: 'ragu'
};
export const signin = async (props) => {
    const respone = await fetch('http://localhost:8800/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
    })
    const data = await respone.json();
    console.log(data);
    return data;

}



export const getTask = async (props) => {
    const respone = await fetch("http://localhost:8800/task", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username: props.id })
    })
    const data = await respone.json()
    console.log('api', data);
    return data

}