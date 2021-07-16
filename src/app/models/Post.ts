export interface Post {
    title: string,
    content: string,
    cover: string,
    id?: any,
    oldcover?: string,
    covername?: string
}

export interface User {
    username: string,
    password: string,
    id?: any,
}