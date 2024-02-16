export const StatColors = (typeName) => {
    switch (typeName) {
        case 'hp':
            return '#7c5'
        case 'attack':
            return '#f42'
        case 'defense':
            return '#fa0'
        case 'special-attack':
            return '#f59'
        case 'special-defense':
            return '#fc3'
        case 'speed':
            return '#6cf'
        default:
            return 'white';
    }
}