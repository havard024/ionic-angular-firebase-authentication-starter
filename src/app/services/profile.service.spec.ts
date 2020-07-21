import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
    ]
  }));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});
