import request from "supertest";
import { expect } from "chai";
const baseUrl = "www.reqres.com";


describe("P0 Test Cases for API Automation", () => {
    it('Gets base URL and respond with 200 OK status', function(done) {
        request(baseUrl)
        .get('/')
        .end(function(err,res){
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
});