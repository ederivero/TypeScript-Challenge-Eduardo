type Trim<S extends string> = S extends ` ${infer U}` | `${infer U} ` ? Trim<U> : S;
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

// ✔