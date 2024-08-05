import { Injectable } from "@angular/core";
import { HttpRequest } from "../utils/httpRequest";

@Injectable ({
    providedIn: 'root'
})
export class CoffeeService {
    constructor(private httpRequest: HttpRequest) {}

    getAllItems(): any {
        return this.httpRequest.get('coffee');
    }

    createItem(name: string, image: string, description: string, priceS: number, priceM: number, priceL: number) {
        return this.httpRequest.post('coffee/create', {
            name,
            image,
            description,
            'small': {
                'size': 'S',
                'price': priceS
            },
            'medium': {
                'size': 'M',
                'price': priceM
            },
            'large': {
                'size': 'L',
                'price': priceL
            }
        });
    }
    
    updateItem(id: string, name: string, image: string, description: string, priceS: number, priceM: number, priceL: number) {
        return this.httpRequest.put(`coffee/update/${id}`, {
            name,
            image,
            description,
            'small': {
                'size': 'S',
                'price': priceS
            },
            'medium': {
                'size': 'M',
                'price': priceM
            },
            'large': {
                'size': 'L',
                'price': priceL
            }
        });
    }
    
    deleteItem(id: string) {
        return this.httpRequest.delete(`coffee/delete/${id}`);
    }
}