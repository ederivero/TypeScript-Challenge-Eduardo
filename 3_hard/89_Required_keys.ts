type RequiredKeys<T> = {
    [K in keyof T]-?: T extends Record<K, T[K]> ? K : never
}[keyof T];
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// ✔