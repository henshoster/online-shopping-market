import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categoryIdToName"
})
export class CategoryIdToNamePipe implements PipeTransform {
  transform(id: any, categories: any): any {
    const category = categories.filter(cat => {
      // console.log(cat);
      // console.log(id);
      // console.log(cat.id == id);
      return cat.id == id;
    });
    //console.log(category);
    return category[0].name;
  }
}
