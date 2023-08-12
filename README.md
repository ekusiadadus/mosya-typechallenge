## TypeScript での「型」

TS で型を定義する方法

### 1. 宣言時に型を定義する

```typescript
let foo: string = "foo";
```

上のような方法を、型アノテーションと呼ぶ。(注釈をつけるともいう)

しかし、上の方法だと型が複雑になると、型アノテーションが長くなってしまい、複雑になりますし、再利用もできません。

例えば、以下のような型を定義する場合

```typescript
let a: { foo: string; bar: number; baz: { hoge: boolean } } = {
  foo: "foo",
  bar: 1,
  baz: {
    hoge: true,
  },
};
```

### 2. type(型エイリアス)を使う

type を用いることで、型を再利用することができるようになります。

```typescript
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: {
    hoge: boolean;
  };
};
```

type を使うことで、再利用可能な型を定義することができます。

### 3. interface を使う

interface は、オブジェクトの型に名前をつけることができます。

```typescript
interface FooBarBaz {
  foo: string;
  bar: number;
  baz: {
    hoge: boolean;
  };
}
```

このように interface を使うことで、簡単にオブジェクトの型を定義することができます。

### type と interface の違い

type:

- プリミティブ型、合併型、交差型など、より複雑な型の表現が可能。
- 型エイリアスを作成する際に使用。

interface:

- オブジェクトの形状を定義するのに特化。
- 同じ名前のインターフェイスを複数回宣言すると、自動的にマージされる。
- クラスとの連携が強く、クラスがインターフェイスを実装することができる。

type はより一般的で複雑な型表現が可能で、interface はオブジェクトの形状の定義やオブジェクト指向プログラミングに特化しています。
例えば、interface ではオブジェクトとクラスの型のみを定義できますが、type ではプリミティブ型や合併型、交差型など、より複雑な型の表現が可能です。

## Generics

<T> というのは、型パラメータと呼ばれるもので、型をパラメータとして受け取ることができる。

```typescript
type Foo<T> = {
  foo: T;
};
```

## Conditional Types

Conditional Types は、条件によって型を変更することができる。

```typescript
type Foo<T> = T extends string ? string : number;
```

## Utility Types

Utility Types は、型を操作するための型。

### Partial

Partial は、オブジェクトの型の全てのプロパティをオプショナルにする。

```typescript
type Foo = {
  foo: string;
  bar: number;
};
```

上のような型があったとき、Partial を使うと以下のようになる。

```typescript
type PartialFoo = Partial<Foo>;
```

```typescript
type PartialFoo = {
  foo?: string | undefined;
  bar?: number | undefined;
};
```

## infer

infer は、条件型の中で、条件にマッチした型を抽出するために使用する。

```typescript
type Foo<T> = T extends { foo: infer U } ? U : never;
```

## keyof

keyof は、オブジェクトの型から、プロパティ名を取得するために使用する。

```typescript
type Foo = {
  foo: string;
  bar: number;
};
```

上のような型があったとき、keyof を使うと以下のようになる。

```typescript
type FooKeys = keyof Foo;
```

```typescript
type FooKeys = "foo" | "bar";
```
