interface ReturnObj {
    result: number
};

export function ohNo () : ReturnObj {
    console.log('Oh no!');
    return { result: 0 };
}