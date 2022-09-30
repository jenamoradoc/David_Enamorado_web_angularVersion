import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  changeSizePageControl = new FormControl<number>(10, { nonNullable: true });

  @Input() pageSizeOptions = [10, 20, 50, 100];
  @Input() totalCount = 0;
  @Output() onChangePage = new EventEmitter<number>();
  @Output() onChangePageSize = this.changeSizePageControl.valueChanges.pipe(
    distinctUntilChanged(),
  );
  // reset paginator
  private _page = 1;
  @Input() set page(value: number) {
    this._page = value;
  }

  get page() {
    return this._page;
  }

  get from() {
    return (this._page - 1) * this.changeSizePageControl.value + 1;
  }

  get to() {
    return Math.min(
      this._page * this.changeSizePageControl.value,
      this.totalCount
    );
  }

  onPrev() {
    if (this._page > 1) {
      this._page -= 1;
      this.onChangePage.emit(this._page);
    }
  }

  onNext() {
    if (this._page < this.changeSizePageControl.value) {
      this._page += 1;
      this.onChangePage.emit(this._page);
    }
  }
}
