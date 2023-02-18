import Team from '../team';
import Character from '../character';

test('Добавим участника команды', () => {
  const team = new Team();
  const hero1 = new Character('Hero1', 'Magician');
  team.add(hero1);
  expect(team.members).toContain(hero1);
  expect(team.members.size).toBe(1);
});

test('add non-inique', () => {
  const team = new Team();
  const hero1 = new Character('Hero1', 'Magician');
  team.add(hero1);
  expect(() => team.add(hero1)).toThrowError('Такой персонаж уже есть');
});

test('add all 4 teammate', () => {
  const team = new Team();
  const hero1 = new Character('Hero1', 'Magician');
  const hero2 = new Character('Hero2', 'Bowman');
  const hero3 = new Character('Hero3', 'Magician');
  const hero4 = new Character('Hero4', 'Undead');
  team.addAll(hero1, hero2, hero3, hero4);
  expect(team.members).toContain(hero1, hero2, hero3, hero4);
  expect(team.members.size).toBe(4);
});

test('add all unique teammate', () => {
  const team = new Team();
  const hero1 = new Character('Hero1', 'Magician');
  const hero2 = new Character('Hero2', 'Bowman');
  const hero3 = new Character('Hero3', 'Magician');
  const hero4 = new Character('Hero4', 'Undead');
  team.add(hero1);
  team.add(hero2);
  expect(team.members.size).toBe(2);
  team.addAll(hero1, hero2, hero3, hero4);
  expect(team.members).toContain(hero1, hero2, hero3, hero4);
  expect(team.members.size).toBe(4);
});

test('members to Array', () => {
  const team = new Team();
  const hero1 = new Character('Hero1', 'Magician');
  const hero2 = new Character('Hero2', 'Bowman');
  const hero3 = new Character('Hero3', 'Magician');
  const hero4 = new Character('Hero4', 'Undead');
  team.addAll(hero1, hero2, hero3, hero4);
  const arr = team.toArray();
  expect(arr).toEqual([hero1, hero2, hero3, hero4]);
});
