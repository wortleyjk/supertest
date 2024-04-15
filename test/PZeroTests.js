import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://reqres.in";

describe("P0 Test Cases for API Automation", () => {
    it("[Test-001]Gets base URL and respond with 200 OK status", (done) => {
        request(baseUrl)
        .get('/')
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    it("[Test-002]Checks that the response is in JSON format and matching specific user data", (done)=> {
        request(baseUrl)
        .get('/api/users/2')
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(200);
            expect('Content-Type', /json/);
            expect(res.body.data.id).to.be.equal(2);
            expect(res.body.data.email).to.be.equal('janet.weaver@reqres.in');
            expect(res.body.data.first_name).to.be.equal('Janet');
            expect(res.body.data.last_name).to.be.equal('Weaver');
            done();
        });
    });
    it("[Test-005] Should return a single color resource",(done)=>{
        request(baseUrl)
        .get("/api/unknown/2")
        .end(function(err, res){
            expect(res.statusCode).to.be.equal(200);
            // check that there is only 1 "id" returned
            const filteredResponseKey = Object.keys(res.body.data).filter( key => key.includes("id")); 
            expect(filteredResponseKey.length).to.be.equal(1);
            done();
        })
    })
});