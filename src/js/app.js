export class Team {
    constructor() {
        this.characters = []
    }

    add(character) {
        this.characters.push(character);
    }

    addAll(...character) {
        this.characters.push(...character);
    }

    [Symbol.iterator] = function () {
        let index = 0;
        const characters = this.characters
        return {
            next() {
                if (index > characters.length) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: characters[index++],
                    done: false
                }
            }
        }
    }
}