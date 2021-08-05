import { Slot } from "./slot.model";

export class Box {
    id: string;
    name: string;
    price: number;
    currency: string;
    iconUrl: string;
    description: string;
    slots: Slot[];
}