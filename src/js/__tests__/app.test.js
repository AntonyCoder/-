import { Team } from "../app";

test('Проверка добавление и перебора персонажей', () => {
    const team = new Team()

    const char1 = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      }

    team.add(char1);

    
})