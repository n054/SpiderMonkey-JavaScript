(function () {
    "use strict";
    describe("Klammeraffe", function () {

        beforeEach(function () {
            this.klammeraffe = new Klammeraffe();
        });

        it("should be instantiable", function () {
            expect(this.klammeraffe).toBeTruthy();
        });

        describe("check", function () {

            it("should be a function", function () {
                expect(_.isFunction(this.klammeraffe.check)).toBeTruthy();
            });

            it('should return true for an empty String', function(){
                expect(this.klammeraffe.check("")).toBeTruthy();
            });

            it('should return false for {', function(){
                expect(this.klammeraffe.check("{")).toBeFalsy();
            });

            it('should return false for }', function(){
                expect(this.klammeraffe.check("}")).toBeFalsy();
            });

            it('should return true for {}', function(){
                expect(this.klammeraffe.check("{}")).toBeTruthy();
            });

            it('should return false for {[}', function(){
                expect(this.klammeraffe.check("{[}")).toBeFalsy();
            });

            it('should return true for {[()]}', function(){
                expect(this.klammeraffe.check("{[()]}")).toBeTruthy();
            });

            it('should return false for {[(])}', function(){
                expect(this.klammeraffe.check("{[(])}")).toBeFalsy();
            });

            it('should return true for {[([({})])]}', function(){
                expect(this.klammeraffe.check("{[([({})])]}")).toBeTruthy();
            });

            it('should return false for {[([(X{})])]}', function(){
                expect(this.klammeraffe.check("{[([(X{})])]}")).toBeFalsy();
            });

        });
    });
})();