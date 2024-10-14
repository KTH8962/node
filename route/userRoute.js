const express = require("express");
const methodOverride = require("method-override");
//여기서 express라는 도구를 가져와서 쓸 준비를 해. 이 도구는 우리가 서버를 만들고 쉽게 요청과 응답을 주고받을 수 있게 도와줘.
const router = express.Router();
//router는 길 안내하는 친구야. 요청이 들어오면 어디로 가야 하는지 알려줘.
const connection = require("../db");

router.route("/")
    .get((req,res) => {
        const query = "SELECT * FROM TBL_USER";
        connection.query(query, (err, result)=> {
            if(err){
                console.error("쿼리 실행 실패 :", err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render("user", { user : result });
        });
    })
    .post((req, res) => {
        const user = req.body;
        // insert
        //const query = `INSERT INTO TBL_USER(id, pwd, name, gender) VALUES ('${user.id}', ${user.pwd}, '${user.name}', '${user.gender}')`;
        const query = "INSERT INTO TBL_USER VALUES(?, ?, ?, ?)";
        connection.query(query, [user.id, user.pwd, user.name, user.gender] , (err, result) => {
            if(err) {
                console.log("쿼리 실행 실패:", err);
                return;
            }
        });
        // insert 끝나면 목록으로 이동
        res.redirect("/user");
    });

router.route("/add")
    .get((req,res) => {
        res.render("user-add");
    });

router.route("/:id")
    .get((req, res) => {        
        const query = `SELECT * FROM TBL_USER WHERE id = '${req.params.id}'`;
        connection.query(query, (err, result) => {
            if(err){
                console.error("쿼리 실행 실패 :", err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render("user-update", { user : result[0] });
        });
    })
    .put((req, res) => {
        const user = req.body;
        const query = 'UPDATE TBL_USER SET pwd = ?, name = ?, gender = ? WHERE id = ?';
        connection.query(query, [user.pwd, user.name, user.gender, user.id], (err, result) => {
            if(err) {
                console.error("쿼리 실행 실패 :", err);
                return;
            }
            res.redirect("/user");
        });
    });
   
module.exports = router;