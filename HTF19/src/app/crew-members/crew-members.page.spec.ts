import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrewMembersPage } from './crew-members.page';

describe('CrewMembersPage', () => {
  let component: CrewMembersPage;
  let fixture: ComponentFixture<CrewMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrewMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
