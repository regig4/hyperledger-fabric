import { PaperState } from "./PaperState";

export class Paper {
    id: number;
    issuer: string;
    owner: string;
    price: number;
    state: PaperState
}
