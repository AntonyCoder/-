import { Team } from "../app";

test('Проверка добавление и перебора персонажей', () => {
    const team = new Team()

    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10, }
    const char2 = { name: 'Маг', type: 'Magician', health: 40, level: 1, attack: 50, defence: 15 };
    const char3 = { name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 30, defence: 20 };

    team.add(char1);
    team.add(char2);
    team.add(char3);

    const result = []
    for(const member of team){
        result.push(member)
    }
    expect(result).toEqual([char1, char2, char3])
})

test('Проверка добавления пустой строки', () => {
    const team = new Team()

    const result = []
    for(const member of team){
        result.push(member)
    }
    expect(result).toEqual([])
})

test('Проверка добавление через addAll', () => {
    const team = new Team()

    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10, }
    const char2 = { name: 'Маг', type: 'Magician', health: 40, level: 1, attack: 50, defence: 15 };
    const char3 = { name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 30, defence: 20 };

    team.addAll(char1, char2, char3);

    const result = []
    for(const member of team){
        result.push(member)
    }
    expect(result).toEqual([char1, char2, char3])
})

