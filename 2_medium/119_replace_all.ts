type ReplaceAll<S extends string, Indetifier extends string, Convert extends string> =
    Indetifier extends ''
    ? S
    : S extends `${infer First}${Indetifier}${infer Second}`
    ? `${First}${Convert}${ReplaceAll<Second, Indetifier, Convert>}` : S
    
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

// ✔