import request from "supertest";
import { expect } from "chai";
const baseUrl = "https://reqres.in";

describe("P1 Test Cases for API Automation",()=>{
    it("[Test-002] Should give a 404 not found error for /nothing request",(done)=>{
        request(baseUrl)
        .get("/nothing")
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
    it("[Test-003] Should give a 404 not found error for a user-not-found",(done)=>{
        request(baseUrl)
        .get("/api/users/23")
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    })
});