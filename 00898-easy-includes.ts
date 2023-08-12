type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? true
    : Includes<R, U>
  : false;
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
