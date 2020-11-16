// type alias
type Age = number

interface Person {
  name: string
  // union types
  size: 'small' | 'middle' | 'large' | { cm: string }
}

interface Can extends Person {
  // optional
  age?: Age
}

// intersection type
const can: Can & { eyecolor: string } = {
    // age: 40,
    name: "",
    size: {cm: "180cm"},
    eyecolor: "brown"
}

//---------------------------

interface Joke {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

fetch('chuck-norris-api').then(r => r.json()).then(data => {
    // type assertion
    const joke = data as Joke 
})

//----------------------------
// utility types
const partialCan: Partial<Can> = {size: "middle"}
const pickCan: Pick<Can, 'age' | 'size'> = {size: 'middle', age: 1}
const omitCan: Omit<Can, 'age'> = {size: "middle", name: ""}



