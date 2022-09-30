import { FormControl } from "@angular/forms";

export interface SearchForm {
    search: FormControl<string>;
    page: FormControl<number>;
    per_page: FormControl<number>;
    sort: FormControl<string>;
}