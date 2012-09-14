(function () {

    "use strict";

    describe("SpiderMonkey", function () {

        beforeEach(function () {
            this.spiderMonkey = window.SpiderMonkey;
        });

        describe("validate", function () {

            it("should be a function", function () {
                expect(_.isFunction(this.spiderMonkey.validate)).toBeTruthy();
            });

            it('should accept an empty String', function(){
                expect(this.spiderMonkey.validate("")).toBeTruthy();
            });

            it('should reject for {', function(){
                expect(this.spiderMonkey.validate("{")).toBeFalsy();
            });

            it('should reject for }', function(){
                expect(this.spiderMonkey.validate("}")).toBeFalsy();
            });

            it('should accept for {}', function(){
                expect(this.spiderMonkey.validate("{}")).toBeTruthy();
            });

            it('should reject for {[}', function(){
                expect(this.spiderMonkey.validate("{[}")).toBeFalsy();
            });

            it('should accept for {[()]}', function(){
                expect(this.spiderMonkey.validate("{[()]}")).toBeTruthy();
            });

            it('should return false for {[(])}', function(){
                expect(this.spiderMonkey.validate("{[(])}")).toBeFalsy();
            });

            it('should accept {[([({})])]}', function(){
                expect(this.spiderMonkey.validate("{[([({})])]}")).toBeTruthy();
            });

            it('should reject {[([(X{})])]}', function(){
                expect(this.spiderMonkey.validate("{[([(X{})])]}")).toBeFalsy();
            });

        });
    });
})();