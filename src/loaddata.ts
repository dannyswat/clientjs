import countries from './data.json';

export interface Country {
    id: number,
    name: string
}

export function getCountryList() : Country[] {
    return countries;
}