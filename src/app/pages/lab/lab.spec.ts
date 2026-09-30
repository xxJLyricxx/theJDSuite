import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Lab } from './lab';

describe('Lab', () => {
  let component: Lab;
  let fixture: ComponentFixture<Lab>;

  beforeEach(async () => {
    vi.stubGlobal('matchMedia', () => ({ matches: false }));
    await TestBed.configureTestingModule({
      imports: [Lab],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('opens the selected device, switches devices, and restores focus on close', async () => {
    const page: HTMLElement = fixture.nativeElement;
    const buttons = page.querySelectorAll<HTMLButtonElement>('.device-button');
    expect(page.querySelector('.device-info')).toBeNull();

    for (const button of buttons) {
      button.click();
      if (component.fadingOut()) {
        expect(page.querySelector('#device-title')?.textContent?.trim()).toBe('WhiteLotus');
        await new Promise(resolve => setTimeout(resolve, 320));
      }
      await fixture.whenStable();
      expect(page.querySelector('#device-title')?.textContent?.trim()).toBe(
        button.ariaLabel
      );
      expect(page.querySelectorAll('app-device-info-list .info-card')).toHaveLength(3);
      expect(button.getAttribute('aria-expanded')).toBe('true');
    }

    page.querySelector<HTMLButtonElement>('.close-panel')!.click();
    await fixture.whenStable();
    expect(page.querySelector('.device-info')).toBeNull();
    expect(document.activeElement).toBe(buttons[1]);
  });

  it('closes the device panel with Escape', async () => {
    const page: HTMLElement = fixture.nativeElement;
    page.querySelector<HTMLButtonElement>('.device-button')!.click();
    await fixture.whenStable();
    page.querySelector('.device-info')!.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape', bubbles: true
    }));
    await fixture.whenStable();
    expect(page.querySelector('.device-info')).toBeNull();
  });
});
