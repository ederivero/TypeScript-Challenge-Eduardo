type Chainable<P = {}> = {
    option<K extends string, V extends any>(key: K, value: V): Chainable<P & { [key in K]: V }>;
    get():P
}
declare const config: Chainable

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()
// expect the type of result to be:
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}

// ✔