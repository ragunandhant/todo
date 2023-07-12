const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8800;
const { User, Task, stickWall } = require("./database");
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.post('/signup', (req, res) => {
    const { username, email, password1, password2 } = { ...req.body }
    if (password1 != password2) {
        res.sendStatus(403)
        res.send("invalid")
    }
    User.create({
        username: username,
        email: email,
        password: password1,
    }).then((docs) => {
        res.send(docs)
    }).catch((err) => {
        res.send(err)
    })

})

app.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }).
        then((user) => {

            if (user.password = req.body.password) {
                console.log(user);
                res.send(user)
            } else {
                console.log("invalid");
                res.send("0")
            }
        })
        .catch((err) => {
            console.log("invalid");
            res.send(err)
        })

})



app.post('/task', (req, res) => {
    console.log(req.body, "ihibb");
    User.findOne({ username: req.body.username })
        .then((docs) => {
            console.log(docs);
            Task.find({ user_id: docs._id }).
                then((docs) => {
                    console.log("task" + docs);

                    res.send(docs)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.send(err)
        })

})
app.post('/taskcreate', (req, res) => {
    Task.create(req.body).
        then((docs) => {
            res.send(docs);
        })
        .catch((err) => {
            console.log(err);
        })
    console.log(req.body);
});
app.patch('/task', (req, res) => {
    Task.findById(req.body.id)
        .then((task) => {
            task.title = req.body.title;
            task.descrption = req.body.descrption;
            task.date = req.body.date;
            task.save();
            res.send("success")
        })
        .catch((err) => {
            res.statusCode(401)
            res.send(err)
        })
})
app.delete('/task', (req, res) => {
    console.log("delete");
    console.log(req.body._id);
    Task.deleteMany({ _id: req.body._id }).
        then((docs) => {
            res.send("success")

        })
        .catch((err) => {
            res.statusCode(401)
            res.send(err)
        })
})

app.post('/sticky/create', (req, res) => {
    stickWall.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id
    }).
        then((docs) => {
            res.send(docs);
        }).
        catch((err) => {
            res.send(err);
        })
})


app.delete('/sticky/delete', (req, res) => {
    stickWall.deleteMany({ _id: req.body._id })
        .then((docs) => {
            res.send(docs);
        })
        .catch((err) => {
            res.send(err);
        })
})

app.get('/sticky/get', (req, res) => {
    stickWall.find({ user_id: req.body.user_id }).
        then((docs) => {

            res.send(docs);
        }).
        catch((err) => {
            console.log("error");
            res.send(err);
        })
})

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});