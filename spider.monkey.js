window.SpiderMonkey = (function(){

    "use strict";

    var validate, bracketsHash;

    bracketsHash = {
        "}":"{",
        "]":"[",
        ")":"("
    };

    validate = function (testString) {

        var stack, testCollection, cancelled;

        stack = new Backbone.Collection();

        testCollection = testString.split("");

        cancelled = false;

        _.each(testCollection, function (character) {
                if (!cancelled && bracketsHash[character]) {
                    if (stack.last() && stack.last().get('character') === bracketsHash[character]) {
                        stack.pop();
                    } else {
                        cancelled = true;
                    }
                } else {
                    stack.push({character:character});
                }
            }
        );

        return !cancelled && stack.length === 0;
    };

    return {
        validate:validate
    }
})();