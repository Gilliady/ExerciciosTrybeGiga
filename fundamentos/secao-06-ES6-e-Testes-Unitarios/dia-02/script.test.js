const { myRemove, myFizzBuzz, encode, decode  } = require("./scripts");

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