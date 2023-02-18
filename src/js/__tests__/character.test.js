import Character from '../character';

test('Создаем имя меньше двух символов', () => {
  expect(() => new Character('К', 'Bowman')).toThrowError(
    new Error('Имя должно содержать не менее 2 и не более 10 символов'),
  );
});

test('Создаем имя больше 10 символов', () => {
  expect(() => new Character('фвафвацу232к3ацвавапв', 'Bowman')).toThrowError(
    new Error('Имя должно содержать не менее 2 и не более 10 символов'),
  );
});

test('Ошибка создания класса', () => {
  expect(() => new Character('Noah', 'Muggle')).toThrowError(
    new Error('Такой класс отсутствует!!!'),
  );
});

test('Создаем имя персонажа', () => {
  const character = new Character('Noah', 'Magician');
  expect(character.name).toBe('Noah');
});

test('Создаем класс персонажа', () => {
  const character = new Character('Noah', 'Magician');
  expect(character.type).toBe('Magician');
});

test('Создаем нового персонажа', () => {
  const character = new Character('Noah', 'Magician');
  const result = {
    name: 'Noah',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('Повышаем уровень персонажа со здоровьем 0', () => {
  const character = new Character('Noah', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(
    new Error('Нельзя повысить левел умершего'),
  );
});

test('Повышаем уровень персонажа со здоровьем больше 0', () => {
  const character = new Character('Noah', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('Наносим стандартный урон по персонажу', () => {
  const character = new Character('Noah', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('Наносим повышенный урон по персонажу', () => {
  const character = new Character('Noah', 'Magician');
  character.defence = 10;
  character.damage(500);
  expect(character.health).toBe(0);
});
