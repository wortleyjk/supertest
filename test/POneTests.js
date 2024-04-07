import request from "supertest";
import { expect } from "chai";
const baseUrl = "www.reqres.com";

describe("P1 Test Cases for API Automation",(done)=>{
    it('Should give a 404 not found error for /nothing',(done)=>{
        request(baseUrl)
        .get("/nothing")
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

});