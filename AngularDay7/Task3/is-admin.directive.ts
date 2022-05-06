import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appIsAdmin]',
})
export class IsAdminDirective implements OnChanges {
  @Input()
  appIsAdmin: string = '';

  Users: string[] = ['Scott', 'Smith', 'Robert'];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnChanges() {
    if (this.Users.includes(this.appIsAdmin)) {
      alert(this.appIsAdmin);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
