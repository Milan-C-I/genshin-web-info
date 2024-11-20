export interface Character {
    _id: string; // MongoDB ObjectId represented as a string
    name: string;
    weapon: string;
    rarity: string; // e.g., "4★" (string representation of rarity with star)
    region: string;
    img_url: string; // Image URL or 'none'
    description: string;
    affiliation: string;
    birthday: string; // Date in string format (e.g., "August 10th")
    constellation: string;
    vision: string; // Elemental power (e.g., "Pyro")
}
