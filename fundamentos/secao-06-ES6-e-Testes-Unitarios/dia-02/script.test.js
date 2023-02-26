const { myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require("./scripts");

describe("myRemove return tests", () => {
  it("verify returns [1,2,4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("verify don't returns [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("verify returns [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("testes myFizzBuz returns", () => {
  it("divisible both returns 'fizzBuzz", () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });
  it("returns fizz", () => {
    expect(myFizzBuzz(9)).toEqual("fizz");
  });
  it('returns buzz', () => {expect(myFizzBuzz(5)).toEqual('buzz')});

  it("returns number", () => {
      (expect(myFizzBuzz(4)).toEqual(4));
  });
   it("returns false", () => {
    expect(myFizzBuzz('top')).toEqual(false);
  });
});

describe('encode functionTests', () => {
  it('is function', () => {
    expect(typeof encode).toEqual('function');
  });
  it('aeiou returns 12345', () => {
    expect('12345').toEqual('12345');
  });
  it('testando return t2st1nd4', () => {
    expect(encode('testando')).toEqual('t2st1nd4');
  });
  it('testando .length', () => {
    expect('teste'.length).toEqual(encode('teste').length);
  }); 
});

describe('decode functionTests', () => {
  it('is function', () => {
    expect(typeof decode).toEqual('function');
  });
  it('12345 returns aeiou', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('testando return t2st1nd4', () => {
    expect(decode('t2st1nd4')).toEqual('testando');
  });
  it('testando .length', () => {
    expect('teste'.length).toEqual(decode('t3st3').length);
  }); 
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
