export interface Car {
    id: number;
    an_achizitie: number;
    model: string;
    nr_km: number;
    in_garantie?: boolean;
    suma_manopera?: number;
}

export interface CarGenerator {
    numberOfGenerations: number;
}