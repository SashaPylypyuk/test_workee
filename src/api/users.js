import Color from 'color';

const user = Array(1000)
  .fill(1)
  .map((_, i) => ({
    color: Color('#7743ce'),
    name: `${i % 2 ? 'Special very very long name' : 'Sasha Pylypyuk'}`,
    speed: 80,
    time: 12345678,
  }));

export default user;
