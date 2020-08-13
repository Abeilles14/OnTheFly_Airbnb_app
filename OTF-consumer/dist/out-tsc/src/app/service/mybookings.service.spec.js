import { TestBed } from '@angular/core/testing';
import { MybookingsService } from './mybookings.service';
describe('MybookingsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MybookingsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mybookings.service.spec.js.map