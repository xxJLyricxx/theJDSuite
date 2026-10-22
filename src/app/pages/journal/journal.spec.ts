import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { JournalComponent } from './journal';
import { JournalService } from '../../services/journal.service';

describe('Projects', () => {
  let component: JournalComponent;
  let fixture: ComponentFixture<JournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalComponent],
      providers: [
        {
          provide: JournalService,
          useValue: { getEntries: () => of([]) }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a loaded journal entry', () => {
    component.entries = [
      {
        ENTRY_ID: 1,
        TITLE: 'Test entry',
        SLUG: 'test-entry',
        SUMMARY: 'A short summary',
        CONTENT: 'The full journal entry.',
        PROJECT: 'Test project',
        STATUS: 'Shipped',
        CREATED_AT: '2026-01-01',
        UPDATED_AT: '2026-01-01'
      }
    ];
    fixture.detectChanges();

    const entry = fixture.nativeElement.querySelector('.journal-entry') as HTMLElement;

    expect(entry).not.toBeNull();
    expect(entry.textContent).toContain('Test entry');
    expect(entry.textContent).toContain('Test project');
    expect(entry.textContent).toContain('A short summary');
  });
});
