import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductInfo {
    removeAccents(str: string) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    getSlug(str: string) {
        return this.removeAccents(str.toLowerCase().replaceAll(' ', '-'));
    }
}