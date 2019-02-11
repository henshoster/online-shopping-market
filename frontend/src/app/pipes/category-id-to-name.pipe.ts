import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categoryIdToName"
})
export class CategoryIdToNamePipe implements PipeTransform {
  transform(id: any, categories: any): any {
    if (categories) {
      const category = categories.filter(cat => {
        return cat.id == id;
      });
      return category[0].name;
    }
    return null;
  }
}
