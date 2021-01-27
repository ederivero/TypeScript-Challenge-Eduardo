type Concat<T extends Array<unknown>,K extends Array<unknown>>= [...T, ...K]
type Result = Concat<[1], [2]> // expected to be [1, 2]