import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export class MyTreeItem {
  public name: string = "node1";
  public children: MyTreeItem[] = []
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendo1537407';

  public fetchChildren(node: MyTreeItem): Observable<MyTreeItem[]> {
    return of(node.children);
  }

  public hasChildren(node: MyTreeItem): boolean {
      return node.children?.length > 0;
  }

}
