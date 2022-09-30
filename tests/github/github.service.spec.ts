import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GithubService } from '../../src/app/github/github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search users', () => {
    service.searchUsers({ search: 'test' }).subscribe((response) => {
      expect(response).toBeTruthy();
    });
  });

  it('should search users with params', () => {
    service
      .searchUsers({ search: 'test', page: 2, per_page: 20, sort: 'stars' })
      .subscribe((response) => {
        expect(response).toBeTruthy();
      });
  });
});
