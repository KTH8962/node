const express = require("express");
const methodOverride = require("method-override");
//여기서 express라는 도구를 가져와서 쓸 준비를 해. 이 도구는 우리가 서버를 만들고 쉽게 요청과 응답을 주고받을 수 있게 도와줘.
const router = express.Router();
//router는 길 안내하는 친구야. 요청이 들어오면 어디로 가야 하는지 알려줘.
const connection = require("../db");

router.route("/")
    .get((req, res) => {
        const query = "SELECT * FROM TBL_STUDENT";
        connection.query(query, (err, result) => {
            if(err){
                console.error("쿼리 실행 실패 :", err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render("student", { list : result });
        });
    })
    .post((req, res) => {
        const stuInfo = req.body;
        const query = `INSERT INTO TBL_STUDENT(stuNo, stuName, stuDept, stuGrade) VALUES('${stuInfo.stuNo}', '${stuInfo.stuName}', '${stuInfo.stuDept}', ${stuInfo.stuGrade})`;
        connection.query(query, err => {
            if(err) {
                console.error("쿼리 실행 실패 :", err);
                return;
            }
        });
        res.redirect("/student");
    });

router.route("/add")
    .get((req, res) => {
        res.render("stu-add");
    });


router.route("/:stuNo")
    .get((req, res) => {        
        const query = `SELECT * FROM TBL_STUDENT WHERE stuNo = '${req.params.stuNo}'`;
        connection.query(query, (err, result) => {
            if(err){
                console.error("쿼리 실행 실패 :", err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render("stu-update", { stuInfo : result[0] });
        });
    })
    .put((req, res) => {
        const sutInfo = req.body;
        const query = 'UPDATE TBL_STUDENT SET stuName = ?, stuDept = ?, stuGrade = ? WHERE stuNo = ?';
        connection.query(query, [sutInfo.stuName, sutInfo.stuDept, sutInfo.stuGrade, req.params.stuNo], err => {
            if(err) {
                console.error("쿼리 실행 실패 :", err);
                return;
            }
            res.redirect("/student");
        });
    })
    .delete((req, res) => {
        const query = `DELETE FROM TBL_STUDENT WHERE stuNo = ${req.params.stuNo}`;
        connection.query(query, err => {
            if(err) {
                console.error("쿼리 실행 실패 :", err);
                return;
            }
            res.redirect("/student");
        });
    });
   
module.exports = router;