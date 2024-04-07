import PZero from "/tests/PZero.js"

function importTest(name, path){
    describe(name, function(){
        require(path)
    });
}

describe("Test Runner", function(){
    importTest("PZero","test/Pzero.js");
})