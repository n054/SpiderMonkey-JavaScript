function SpiderMonkey() {

    "use strict";

    this.validate = function (testString) {

        var stack, bracketsHash, testCollection, cancelled;

        stack = new Backbone.Collection();

        bracketsHash = {
            "}":"{",
            "]":"[",
            ")":"("
        };

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
                    stack.push( {character : character});
                }
            }
        );

        return !cancelled && stack.length === 0;
    };
}