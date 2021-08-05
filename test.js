/**
 * @file Mocha test suite for Week 02 assignment. This is not to be considered
 * complete coverage or a complete test suite. It will detect basic passing 
 * of the program. It is up to the student to ensure that their code meets
 * the specification as written.
 * 
 * @version 0.0.1
 * @author Eugene Rooney <erooney@unm.edu>
 */

// Include assertion module for tests and Week 02 code to test against.
var assert = require('assert');
var wk = require('../index.js');

// 
// describe() is simply a way to group our tests in Mocha. We can nest our 
// tests in groups as deep as we deem necessary. describe() takes two 
// arguments, the first is the name of the test group, and the second 
// is a callback function.
// 
//        +-- Name of the test group
//        |                +------------------ Callback function.
//        v                v
describe('Variables...', function() {
    // 
    // it() is used for an individual test case. it() should be written 
    // as if you were saying it out loud: “It should equal zero”, “It 
    // should log the user in”, etc. it() takes two argument    s, a 
    // string explaining what the test should do, and a callback function 
    // which contains our actual test:
    // 
    describe('Testing variable existence only...', function() {
        it('firstName exists...', function(){
            assert.ok(typeof wk.firstName !== 'undefined');
        });

        it('lastName exists...', function(){
            assert.ok(typeof wk.lastName !== 'undefined');
        });

        it('fullName exists...', function(){
            assert.ok(typeof wk.fullName !== 'undefined');
        });

        it('fullNameLength exists...', function(){
            assert.ok(typeof wk.fullNameLength !== 'undefined');
        });

        it('firstInitial exists...', function(){
            assert.ok(typeof wk.firstInitial !== 'undefined');
        });

        it('lastInitial exists...', function(){
            assert.ok(typeof wk.lastInitial !== 'undefined');
        });

        it('initials exists...', function(){
            assert.ok(typeof wk.initials !== 'undefined');
        });

        it('fullNameUppercase exists...', function(){
            assert.ok(typeof wk.fullNameUppercase !== 'undefined');
        });

        it('repeatCount exists...', function(){
            assert.ok(typeof wk.repeatCount !== 'undefined');
        });

        it('repeatFirstInitial exists...', function(){
            assert.ok(typeof wk.repeatFirstInitial !== 'undefined');
        });

        it('endOfFirstName exits...', function(){
            assert.ok(typeof wk.endOfFirstName !== 'undefined');
        });

        it('endOfLastName exits...', function(){
            assert.ok(typeof wk.endOfLastName !== 'undefined');
        });

        it('testRepeat exits...', function(){
            assert.ok(typeof wk.testRepeat !== 'undefined');
        });
        
        it('redactedName exits...', function(){
            assert.ok(typeof wk.redactedName !== 'undefined');
        });

        it('emailAddress exits...', function(){
            assert.ok(typeof wk.emailAddress !== 'undefined');
        });

        it('atPosition exits...', function(){
            assert.ok(typeof wk.atPosition !== 'undefined');
        });

        it('periodPosition exits...', function(){
            assert.ok(typeof wk.periodPosition !== 'undefined');
        });

        it('redactedEmailAddress exits...', function(){
            assert.ok(typeof wk.redactedEmailAddress !== 'undefined');
        });

        it('randomNumber exits...', function(){
            assert.ok(typeof wk.randomNumber !== 'undefined');
        });

        it('randomNumber2 exits...', function(){
            assert.ok(typeof wk.randomNumber2 !== 'undefined');
        });

        it('fullNameLengthIsEven exits...', function(){
            assert.ok(typeof wk.fullNameLengthIsEven !== 'undefined');
        });

        it('middleOfFirstName exits...', function(){
            assert.ok(typeof wk.middleOfFirstName !== 'undefined');
        });

        it('grades array exits...', function(){
            assert.ok(typeof wk.grades.length !== 'undefined');
        });

        it('countOfGrades exits...', function(){
            assert.ok(typeof wk.countOfGrades !== 'undefined');
        });

        it('sumOfGrades exits...', function(){
            assert.ok(typeof wk.sumOfGrades !== 'undefined');
        });

        it('avgGrade exits...', function(){
            assert.ok(typeof wk.avgGrade !== 'undefined');
        });

        it('oddGrades exits...', function(){
            assert.ok(typeof wk.oddGrades.length !== 'undefined');
        });

    });
});
    
    