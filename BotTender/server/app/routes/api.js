var ProfessorSchema = require('../models/Professor.js')
var uniqid = require('uniqid');

module.exports = (router) => {


    router.get('/hello', (req,res) => {
        res.json({msg:'Hello Peeps'});
    });

    router.post('/getData', (req,res) => {

        let body = req.body;

        console.log(body);

        res.json({success: "Request successfully made"});

    });

    router.post('/updateProfessor', (req,res) => {
        let professor = req.body;
        console.log('NEW PROF:', professor);
        let updatedProfessor = new ProfessorSchema();
        updatedProfessor.name = professor.name;
        updatedProfessor.comments = professor.comments;
        updatedProfessor.uid = professor.uid;
        updatedProfessor.count = professor.count;
        console.log('Comments:',updatedProfessor.comments);
        ProfessorSchema.findOneAndRemove({uid:updatedProfessor.uid}, (err) => {
            console.log(err);
            if(!err) {
                updatedProfessor.save(professor, (err) => {
                    if(!err) {
                        res.json({success:true});
                    }

                    else {
                        res.json({success:false});
                    }
                })
            }

            else {
                res.json({success:false});
            }
        })

    });

    router.post('/createProfessor', (req,res) => {
        let body = req.body;
        console.log(body);


        let professor = new ProfessorSchema();
        professor.name = body.name;
        professor.uid = uniqid();
        professor.comments = JSON.stringify([]);
        
        professor.save(professor, (err) => {
            if(!err) {
                res.json({success:true});
                
            }

            else {
                console.log('Error(Create):', err);
                res.json({success:false})
            }
        })
    });

    router.get('/getProfessors', (req,res) => {
        ProfessorSchema.find({}, (err, professors) => {
            if(!err) {
                res.json({data:professors});
            }
            
            else {
                console.log('ERROR(GET):', err);
                res.json({data:null})
            }
        });
    })

    return router;



}