import React from 'react';
var baseURL = 'http://10.148.129.28:8000/api';
module.exports = {

    submitDrink: async (drinkRequest) => {
        console.log('IN HERE');
        try {
            const res = await fetch(baseURL + '/requestDrink', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    drinkRequest: drinkRequest
                })
            });
            console.log(res);
            return res.json();

        } catch(e) {
            console.log('ERROR(CREATE):',e);
        }
    },
    getProfessors: async () => {
        try {
            const res = await fetch(baseURL + '/getProfessors', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return res.json();
        } catch(e) {
            console.log('ERROR(GET):', e);
        }
        
    },

    createProfessor: async (name) => {
        try {
            const res = await fetch(baseURL + '/createProfessor', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name
                })
            });

            return res.json();

        } catch(e) {
            console.log('ERROR(CREATE):',e);
        }
    },

    updateProfessor: async (updatedProfessor) => {
        console.log('UPDATED PROFESSOR FROM SERVICE:', JSON.stringify(updatedProfessor));
        try 
        { const res = await fetch(baseURL + '/updateProfessor', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProfessor)
        })
        } catch(e) {
            console.log('ERROR(UPDATE):', e);
        }
    }


}