const persons = [
    {
        "name": "Lennart Johansson",
        "city": "Stockholm"
    },
    {
        "name": "Karl Eriksson",
        "city": "London"
    },
    {
        "name": "Pekka Hartikainen",
        "city": "Helsinki"
    },
    {
        "name": "Mia Svensson",
        "city": "Berlin"
    }
];

export const getAllpersons = () => persons;
export const getPerson = (name: string) => persons.find((person) => person.name === name);
