import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  imports: [AvatarComponent],
  standalone: true,
  template: `
    @if (imageUrl) {
      <ks-avatar
        [size]="size"
        [imageUrl]="imageUrl"
      ></ks-avatar>
    } @else {
      <ks-avatar [size]="size"></ks-avatar>
    }
  `
})
class TestHost {
  size = 100;
  imageUrl = undefined as any;
}

describe('AvatarComponent', () => {
  let component: TestHost;
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default avatar image', () => {
    const imgEl = fixture.debugElement.query(
      By.css('img')
    ).nativeElement;
    expect(imgEl.src).toContain(
      'http://localhost/assets/placeholder.png'
    );
  });

  it('should display the input avatar image', () => {
    fixture.componentInstance.imageUrl =
      'assets/test-avatar.png';
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(
      By.css('img')
    ).nativeElement;
    expect(imgEl.src).toContain('assets/test-avatar.png');
  });

  it('should set the correct size for the avatar', () => {
    fixture.componentInstance.size = 150;
    fixture.detectChanges();
    const avatarEl = fixture.debugElement.query(
      By.css('.ks-avatar')
    ).nativeElement;
    const imgEl = fixture.debugElement.query(
      By.css('img')
    ).nativeElement;
    expect(avatarEl.style.width).toBe('150px');
    expect(avatarEl.style.height).toBe('150px');
    expect(imgEl.style.width).toBe('150px');
    expect(imgEl.style.height).toBe('150px');
  });
});
